"use client";
import { FaMobileAlt, FaMale, FaUser } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Modal, Radio, Card } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PersianDatePicker from "@/components/persian-datepicker";
import { UpdateUserPayload } from "../types/users/update-info";
import useUpdateUser from "../hooks/useUpdateProfile";
import LoadingOverlay from "@/components/loading/loading-overlay";

// تعریف نوع اطلاعات کاربری

const UserProfile = () => {
  const { control, handleSubmit, setValue, watch } = useForm<UpdateUserPayload>(
    {
      defaultValues: {
        first_name: "امیرحسین",
        last_name: "اکبرزاده",
        phone_number: "09154023392",
        birth_date: "",
        is_registered: true, //این فیلد فعلا به عنوان مرد یا زن تلقی میشه
      },
    }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const birth_date = watch("birth_date");
  const router = useRouter();

  const {
    // data: updatedUserInfo,
    mutate: updateUser,
    isPending,
  } = useUpdateUser();
  // تابعی برای ثبت اطلاعات کاربر
  const onSubmit = (data: UpdateUserPayload) => {
    console.log("User Data:", data);
    const extendedData = { ...data, national_code: "0905050163" };
    updateUser(extendedData);
  };

  return (
    <>
      <LoadingOverlay isLoading={isPending} />{" "}
      {/* نمایش لودینگ هنگام درخواست */}
      <div className="absolute top-[25vh] w-full flex items-center">
        <Card
          className="flex flex-col items-center justify-between gap-4 relative rounded-[50px] bg-[#f0d9b1] z-4 max-w-[530px] h-screen mx-auto"
          style={{ boxShadow: "0 -5px 20px rgba(0,0,0,.5)" }}
        >
          <div
            className="w-36 h-36 rounded-full bg-gray-300 top-[-50px] absolute "
            style={{ right: "35%" }}
          >
            <Image
              src="/images/profile-photo.webp"
              width={144}
              height={144}
              alt="Profile Picture"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col flex-grow gap-2 justify-between mt-[90px] px-2 pb-4 font-Yekan-Regular h-[60vh]"
          >
            <div>
              {/* فیلد نام */}
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <Input
                    addonBefore={
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <span>نام:</span>
                      </div>
                    }
                    {...field}
                    className="mb-3 border-r-0"
                  />
                )}
              />

              {/* فیلد نام خانوادگی */}
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <Input
                    addonBefore={
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <span>نام خانوادگی:</span>
                      </div>
                    }
                    {...field}
                    className="mb-3 border-r-0"
                  />
                )}
              />

              {/* شماره تماس (غیرفعال) */}
              <Input
                addonBefore={
                  <div className="flex items-center gap-2">
                    <FaMobileAlt />
                    <span>شماره تماس:</span>
                  </div>
                }
                value={watch("phone_number")}
                readOnly
                className="mb-3 border-r-0"
              />

              {/* فیلد تاریخ تولد */}
              <Input
                value={
                  birth_date
                    ? dayjs(birth_date).format("YYYY-MM-DD")
                    : "انتخاب تاریخ تولد"
                }
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

              {/* فیلد جنسیت */}
              <Controller
                name="is_registered"
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
                      <Radio value={true}>مرد</Radio>
                      <Radio value={false}>زن</Radio>
                    </Radio.Group>
                  </div>
                )}
              />
            </div>

            {/* دکمه‌ها */}
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

        {/* مودال انتخاب تاریخ تولد */}
        <Modal open={isModalOpen}>
          <PersianDatePicker
            value={birth_date ? dayjs(birth_date) : null}
            onChange={(date) => {
              if (date) {
                const formattedDate = dayjs(date).format("YYYY-MM-DD");
                setValue("birth_date", formattedDate);
                setIsModalOpen(false);
              }
            }}
            title="انتخاب تاریخ تولد"
          />
        </Modal>
      </div>
    </>
  );
};

export default UserProfile;
