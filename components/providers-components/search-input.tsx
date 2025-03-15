"use client";
import { useBranchInfo } from "@/app/hooks/useBranches";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import ProvidersCard from "./providers-card";
import { Spin } from "antd";
import styles from "./provider-custom-search.module.css";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);
  const {
    data: providers,
    refetch,
    isLoading,
    error,
  } = useBranchInfo(undefined, searchTerm);
  useEffect(() => {
    refetch();
  }, [searchTerm]);
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <Search
        placeholder="برای مثال: دیجیتال منو"
        allowClear
        className={styles.searchInput}
        enterButton="جستجو"
        size="large"
        onSearch={handleSearch} // اینجا مقدار مستقیم پاس داده می‌شود
      />
      {isLoading ? (
        <Spin />
      ) : (
        <div className="flex flex-col gap-4">
          {providers?.result.map((provider) => (
            <ProvidersCard
              imageSrc="/images/hamburger-test.webp"
              name={provider.name}
              key={provider.branch_id}
              cardDestination={provider.branch_id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
