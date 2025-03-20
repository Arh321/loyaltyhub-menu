"use client";
import { FaMobileAlt, FaMale, FaUser } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Modal, DatePicker, Radio, Card } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

// تعریف نوع اطلاعات کاربری
interface UserProfileData {
  fullName: string;
  phone: string;
  birthDate: string;
  gender: "male" | "female";
}

const UserProfile = () => {
  const { control, handleSubmit, setValue, watch } = useForm<UserProfileData>({
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

  const onSubmit = (data: UserProfileData) => {
    console.log("User Data:", data);
    // API call for updating user profile
  };

  return (
    <div className="absolute top-[25vh] w-full flex items-center">
      <Card
        className="flex flex-col items-center justify-between gap-4 relative rounded-[50px] bg-[#f0d9b1] z-4 max-w-[530px] h-screen mx-auto"
        style={{ boxShadow: "0 -5px 20px rgba(0,0,0,.5)" }}
      >
        <div className="w-32 h-32 rounded-full bg-gray-300 top-[-30px] absolute">
          <Image
            src="/images/profile-photo.webp"
            width={128}
            height={128}
            alt="Profile Picture"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col flex-grow gap-2 justify-between mt-[90px] px-2 pb-4 font-Yekan-Regular h-[60vh]"
        >
          <div>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  addonBefore={
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>نام و نام خانوادگی:</span>
                    </div>
                  }
                  {...field}
                  className="mb-3 border-r-0"
                />
              )}
            />

            <Input
              addonBefore={
                <div className="flex items-center gap-2">
                  <FaMobileAlt />
                  <span>شماره تماس:</span>
                </div>
              }
              value={watch("phone")}
              readOnly
              className="mb-3 border-r-0"
            />

            <Input
              value={birthDate ? dayjs(birthDate).format("YYYY-MM-DD") : ""}
              readOnly
              addonBefore={
                <div className="flex items-center gap-2">
                  <MdCalendarMonth />
                  <span>تاریخ تولد:</span>
                </div>
              }
              onClick={() => setIsModalOpen(true)}
              className="mb-3 cursor-pointer border-r-0"
            />

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <div className="custom-input flex items-center relative">
                  <Input
                    readOnly
                    addonBefore={
                      <div className="flex items-center gap-2">
                        <FaMale />
                        <span>جنسیت</span>
                      </div>
                    }
                    className="border-r-0"
                  />
                  <Radio.Group
                    {...field}
                    className="mb-3 absolute top-1 right-32"
                  >
                    <Radio value="male">مرد</Radio>
                    <Radio value="female">زن</Radio>
                  </Radio.Group>
                </div>
              )}
            />
          </div>

          <div className="flex justify-between mt-4 w-full gap-2">
            <Button className="custom-btn flex-grow" htmlType="submit">
              ویرایش پروفایل
            </Button>
            <Button
              className="custom-btn-transparent w-1/3"
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
          onChange={(date) =>
            setValue("birthDate", date ? date.format("YYYY-MM-DD") : "")
          }
          format="YYYY-MM-DD"
          className="w-full"
        />
      </Modal>
    </div>
  );
};

export default UserProfile;
