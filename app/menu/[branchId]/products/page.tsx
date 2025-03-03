"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@/app/store/store";
import { fetchMenuByBranch } from "@/app/lib/api/digital-menu/api-menu";
import { setMenuData } from "@/app/store/menuSlice"; // Assuming this action exists
import ProductCard from "@/components/menu-page/products/product-card";
import CategoryTabs from "@/components/menu-page/products/category-tabs";
import { Category, Main, Product } from "@/app/types/api-menu/menu";
import { Main } from "@/app/types/api-menu/menu";

const ProductsPage = () => {
  const { branchId } = useParams(); // ✅ Get branchId from URL
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  // const [menuData, setMenuData] = useState<Main>();

  // const [categories, setCategroies] = useState<Category[]>([]);
  // const [products, setProducts] = useState<Product[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!branchId) return;

    setLoading(true);
    console.log("use effect entered");
    fetchMenuByBranch(Number(branchId))
      .then((data: Main) => {
        if (data.status === "success") {
          // dispatch(
          //   setMenuData({
          //     categories: data.result[0].categories,
          //     products: data.result[0].categories,
          //   })
          // );
          // setCategroies(data.result[0].categories);
          // setProducts(
          //   data.result[0].categories[menu?.selectedCategory].products
          // );
          // setSelectedCategory(
          //   !selectedCategory ? menu?.selectedCategory : selectedCategory
          // );
          const selectedCategory = data.result[0].categories.find(
            (category) => category.category_id === menu?.selectedCategory
          );
          dispatch(
            setMenuData({
              categories: data.result[0].categories,
              products: selectedCategory ? selectedCategory.products : [], // اینجا مقدار جدید جایگزین مقدار قبلی می‌شود
              selectedCategory: menu?.selectedCategory,
            })
          );
        } else {
          throw new Error(data.message || "دریافت منو با مشکل مواجه شد");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [branchId, menu?.selectedCategory, dispatch]);

  return (
    <div className="p-4 bg-[#F0D5B6] h-screen max-w-[570px] mx-auto ">
      {loading && <p>در حال دریافت اطلاعات...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <CategoryTabs
        categories={menu?.categories}
        selectedCategory={menu?.selectedCategory}
      />
      <div className="flex flex-col gap-4 overflow-y-auto h-full ">
        {menu?.products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
