"use client";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import CTAButton from "../shared-components/cta-button/cta-button";
import { useRouter } from "next/navigation";
import WorkTimesDrawer from "../header/sidebar-components/work-times-bottom";
import { useState } from "react";
import SocialMediaDrawer, {
  ISocialMedia,
} from "../header/sidebar-components/social-media-drawer";
import ContactUsBottom from "../header/sidebar-components/contact-us-bottom";
const CompanyInfoContainer = () => {
  const [openModals, setOpenModals] = useState({
    WorkTimesDrawer: false,
    SocialModal: false,
    ContactUsDrawer: false,
  });
  const router = useRouter();
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: company?.name || "",
          text: company?.description || "",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You may want to show a toast/notification here that URL was copied
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  const goToMap = () => {
    window.open(
      `https://maps.google.com/maps?q=${company?.latitude},${company?.longitude}`,
      "_blank"
    );
  };

  const companyInfoItems = [
    {
      icon: "teenyicons:contact-outline",
      title: "ارتباط با ما",
      onClick: () => setOpenModals({ ...openModals, ContactUsDrawer: true }),
    },
    {
      icon: "tabler:clock",
      title: "ساعات کاری",
      onClick: () => setOpenModals({ ...openModals, WorkTimesDrawer: true }),
    },
    {
      icon: "tabler:social",
      title: "شبکه های اجتماعی",
      onClick: () => setOpenModals({ ...openModals, SocialModal: true }),
    },
    {
      icon: "tabler:map-pin",
      title: "موقعیت مکانی",
      onClick: goToMap,
    },
  ];

  const socialMedia: ISocialMedia[] = company?.social_media
    ? Object.entries(JSON.parse(company.social_media)).map(([title, url]) => ({
        title:
          title === "instagram"
            ? "اینستاگرام"
            : title === "telegram"
            ? "تلگرام"
            : title === "whatsapp"
            ? "واتساپ"
            : title === "twitter"
            ? "توییتر"
            : title === "facebook"
            ? "فیسبوک"
            : title,
        url: url as string,
        icon: `mdi:${title}`,
        color:
          title === "instagram"
            ? "#E4405F"
            : title === "telegram"
            ? "#0088cc"
            : title === "whatsapp"
            ? "#25D366"
            : title === "twitter"
            ? "#1DA1F2"
            : title === "facebook"
            ? "#1877F2"
            : "#000000",
      }))
    : [];

  return (
    <div
      style={{
        background:
          "linear-gradient(to top, var(--background-theme), rgb(0,0,0,0.9))",
      }}
      className="w-full h-full relative flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="!rounded-full !size-[132px] overflow-hidden border-[0.7rem] border-[rgb(255,255,255,0.3)]">
          <ImageWithLoader
            src={companyLogo || ""}
            alt="company logo"
            width={132}
            height={132}
            imageClass="object-cover "
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-Yekan-Medium">
            {company?.name}
          </span>
          <span className="text-gray-400 text-xs font-Yekan-Medium">
            Rose Darvishi Hotel
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 p-4">
        {companyInfoItems.map((item) => (
          <CompanyInfoItem key={item.title} {...item} />
        ))}
      </div>
      <div className="w-full grid grid-cols-4 gap-2 p-4">
        <CTAButton
          onClick={() => {
            router.push("/departments");
          }}
          className="w-full col-span-3 px-[28px] py-[14px]"
        >
          مشاهده منو
        </CTAButton>
        <CTAButton className="w-full" onClick={handleShare}>
          <Icon icon="mynaui:share" width="30" height="30" />
        </CTAButton>
      </div>
      <ContactUsBottom
        open={openModals.ContactUsDrawer}
        onClose={() => setOpenModals({ ...openModals, ContactUsDrawer: false })}
      />
      <WorkTimesDrawer
        open={openModals.WorkTimesDrawer}
        onClose={() => setOpenModals({ ...openModals, WorkTimesDrawer: false })}
      />
      <SocialMediaDrawer
        open={openModals.SocialModal}
        onClose={() => setOpenModals({ ...openModals, SocialModal: false })}
        socialMedia={socialMedia}
      />
    </div>
  );
};

export default CompanyInfoContainer;

export const CompanyInfoItem = ({
  icon,
  title,
  onClick,
}: {
  icon: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className=" flex items-center gap-2  w-full aspect-[16/3] overflow-hidden "
    >
      <span className="size-3 border-2 border-white rounded-full"></span>
      <div className="bg-[rgb(0,0,0,0.8)] text-white flex items-center gap-2 h-full grow  rounded-[10px] px-4">
        <Icon icon={icon} width="24" height="24" />
        <span className="grow text-center">{title}</span>
      </div>
    </div>
  );
};
