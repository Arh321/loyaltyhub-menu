import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams, useRouter } from "next/navigation";
import CTAButton from "../shared-components/cta-button/cta-button";
import { SearchOutlined } from "@ant-design/icons";

interface IMenusListHeaderProps {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;
}

const MenusListHeader = ({ isGrid, setIsGrid }: IMenusListHeaderProps) => {
  const { depId } = useParams();
  const router = useRouter();
  return (
    <div className="flex items-center gap-2 pb-2 sticky top-0 bg-light-background z-10">
      <div
        role="button"
        onClick={() => router.push(`/departments/${depId}/search`)}
        style={{
          boxShadow: "inset 0 2px 5px rgba(255,255,255,.3)",
        }}
        className=" rounded-[10px] p-3 w-full backdrop-blur-md bg-[rgba(0,0,0,0.15)] flex items-center gap-2"
      >
        <p className="flex items-center gap-2 w-max font-Yekan-Light text-sm ">
          <SearchOutlined />
          <span>جستجوی محصول</span>
        </p>
      </div>
      <CTAButton
        style={{
          boxShadow: "inset 0 2px 5px rgba(255,255,255,.3)",
        }}
        className="rounded-[10px] p-3 !size-[44px] aspect-square backdrop-blur-md !bg-[rgba(0,0,0,0.15)] flex items-center gap-2 text-light-text hover:!bg-[rgba(0,0,0,0.15)] "
        onClick={() => setIsGrid(!isGrid)}
      >
        {isGrid ? (
          <Icon icon="ic:round-menu" width="20" height="20" />
        ) : (
          <Icon icon="bi:grid-fill" width="20" height="20" />
        )}
      </CTAButton>
    </div>
  );
};

export default MenusListHeader;
