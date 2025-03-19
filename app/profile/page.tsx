"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Modal, DatePicker, Radio, Card } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UserProfile = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      fullName: "امیرحسین اکبرزاده",
      phone: "09154023392",
      birthDate: "",
      gender: "male",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const birthDate = watch("birthDate");
  const router = useRouter();
  const onSubmit = (data) => {
    console.log("User Data:", data);
    // call api edit user profile info
  };

  return (
    <>
      <div className="absolute top-[25vh] w-full flex items-center">
        <Card
          className=" flex flex-col items-center justify-between gap-4 relative rounded-[50px]  bg-[#f0d9b1] z-4 max-w-[530px] h-screen mx-auto"
          style={{ boxShadow: "0 -5px 20px rgba(0,0,0,.5)" }}
        >
          {/* <div className="!bg-[#005b4c] flex flex-col h-[30vh]"></div> */}
          <div className="w-32 h-32 rounded-full bg-gray-300  top-[-30px]  absolute right-6 left-0">
            <Image
              src="/images/profile-photo.webp"
              width={128}
              height={128}
              className=""
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col flex-grow gap-2 justify-between mt-[90px] px-2 pb-4 font-Yekan-Regular h-[60vh]"
          >
            <div>
              {/* <label>نام و نام خانوادگی:</label> */}
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    addonBefore={
                      <span className="border-l-0">نام و نام خانوادگی: </span>
                    }
                    {...field}
                    style={{ borderRightWidth: 0 }}
                    className="mb-3 border-r-0"
                  />
                )}
              />

              {/* <label>شماره تماس:</label> */}
              <Input
                addonBefore={<span className="border-l-0">شماره تماس: </span>}
                style={{ borderRightWidth: 0 }}
                value={watch("phone")}
                readOnly
                className="mb-3 border-r-0 "
              />

              {/* <label>تاریخ تولد:</label> */}
              <Input
                value={birthDate ? dayjs(birthDate).format("YYYY-MM-DD") : ""}
                readOnly
                style={{ borderRightWidth: 0 }}
                addonBefore={<span className="border-l-0">تاریخ تولد:</span>}
                onClick={() => setIsModalOpen(true)}
                className="mb-3 cursor-pointer border-r-0"
              />

              {/* <label>جنسیت:</label> */}
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <div className="custom-input flex items-center relative">
                    <Input
                      readOnly
                      className="border-r-0"
                      style={{ borderRightWidth: 0 }}
                      addonBefore={<span>جنسیت</span>}
                    />
                    <Radio.Group
                      {...field}
                      className="mb-3 absolute top-1 right-20 font-Yekan-Regular"
                    >
                      <Radio value="male" className="rtl">
                        مرد
                      </Radio>
                      <Radio value="female" className="rtl">
                        زن
                      </Radio>
                    </Radio.Group>
                  </div>
                )}
              />
            </div>

            <div className="flex justify-between mt-4 w-full gap-2 ">
              <Button
                className="custom-btn font-Yekan-Regular flex-grow"
                htmlType="submit"
              >
                ویرایش پروفایل
              </Button>
              <Button
                className="custom-btn-transparent w-1/3 font-Yekan-Regular"
                onClick={() => router.back()}
              >
                بازگشت
              </Button>
            </div>
          </form>
        </Card>

        <Modal
          title="انتخاب تاریخ تولد"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={() => setIsModalOpen(false)}
        >
          <DatePicker
            onChange={(date) => setValue("birthDate", date)}
            format="YYYY-MM-DD"
            className="w-full"
          />
        </Modal>
      </div>
    </>
  );
};

export default UserProfile;
