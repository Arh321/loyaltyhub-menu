"use client";

import { fetchMenuByBranch } from "@/app/lib/api/digital-menu/api-menu";
import { Main, Result } from "@/app/types/api-menu/menu";
import { useEffect, useState } from "react";
import CategoryCard from "./category-card";

export default function MenuCategories({
  branchId,
  gridCols,
}: {
  branchId: string | string[];
  gridCols: number;
}) {
  const [menu, setMenu] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!branchId) return;
    setLoading(true);
    fetchMenuByBranch(Number(branchId))
      .then((data: Main) => {
        if (data.status === "success") {
          setMenu(data.result[0]);
        } else {
          throw new Error(data.message || "دریافت منو با مشکل مواجه شد");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [branchId]);

  if (loading) return <p>⏳ در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <>
      {/* کارت‌ها */}
      {menu?.categories && menu.categories.length > 0 ? (
        <div className={`grid grid-cols-${gridCols} gap-4`}>
          {menu.categories.map((category) => (
            <CategoryCard
              key={category.category_id}
              titleFa={category.category_name}
              imageUrl={"/images/hamburger-test.jpg"}
              expand={gridCols == 1}
            />
          ))}
        </div>
      ) : (
        <p className="font-almarai flex justify-center text-red-500">
          رستوران مورد نظر یافت نشد!
        </p>
      )}
    </>
  );
}
