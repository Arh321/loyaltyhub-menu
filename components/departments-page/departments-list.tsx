"use client";
import { getDepartments } from "@/api/departmentService";
import { IDepartment } from "@/types/branches/branches";
import { IHttpResult } from "@/types/http-result";
import { useQuery } from "@tanstack/react-query";
import ProvidersCard from "./department-list-item";
import ErrorComponent from "../shared-components/error-component/error-component";
import { departmentsImageData } from "./departments-image-data";
import { StaticImageData } from "next/image";
import CTAInput from "../shared-components/cta-input/cta-input";
import DepartmentItemSkeleton from "./department-item-skeleton";
import useSearchDepartments from "@/hooks/useSearchDepartments";
import { useMemo } from "react";
const DepartmentsList = () => {
  const {
    data: shops,
    isLoading,
    error,
    isRefetching,
    refetch,
  } = useQuery<IHttpResult<IDepartment[]>>({
    queryKey: ["departments"],
    queryFn: () => getDepartments({}),
  });
  const { search, debouncedSearch, handleSearch, setSearch } =
    useSearchDepartments();

  const departments = useMemo(() => {
    return shops?.result?.filter((shop) =>
      shop.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, shops]);

  if (error) {
    return <ErrorComponent refetch={() => refetch()} />;
  }

  return (
    <div className="flex flex-col gap-3 w-full grow overflow-y-auto">
      <div className="w-full flex justify-center items-center gap-2 p-2 rounded-[6px] border border-light-gray hover:border-light-primary-hover transition-all focus-within:border-light-primary-hover">
        <CTAInput
          placeholder="جستجو مجموعه ها"
          haveBorder={false}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      <span className="self-start w-full text-white text-center font-Yekan-Bold text-2xl border-gradient-secondary pb-2 border-b border-light-gray">
        شعبه ها
      </span>
      {isLoading || isRefetching ? (
        <div className="flex flex-col gap-3 justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <DepartmentItemSkeleton key={index} />
          ))}
        </div>
      ) : (
        departments?.map((shop) => (
          <ProvidersCard
            imageSrc={
              departmentsImageData.find((image) => image.id === shop.branch_id)
                ?.image as StaticImageData
            }
            imageId={shop.branch_id}
            name={shop.name}
            key={shop.branch_id} // key باید به عنوان prop پاس داده شود
            cardDestination={shop.branch_id}
          />
        ))
      )}
    </div>
  );
};

export default DepartmentsList;
