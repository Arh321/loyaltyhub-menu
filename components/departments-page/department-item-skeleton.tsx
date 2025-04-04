import { Skeleton } from "antd";

const DepartmentItemSkeleton = () => {
  return (
    <div className="w-full h-[80px] lxs:h-[85px] xs:h-[90px] bg-gray-200 rounded-full">
      <Skeleton.Node active className="!w-full !h-full" />
    </div>
  );
};

export default DepartmentItemSkeleton;
