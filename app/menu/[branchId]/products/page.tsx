"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@/app/store/store";
import ProductCategoryName from "@/components/menu-page/products/payment-page/product-category-name";
import { useProducts } from "@/app/hooks/useProducts";
import { useCategories } from "@/app/hooks/useCategories";
import CartNotification from "@/components/cart-notification";
import { Skeleton, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
const ProductCard = dynamic(
  () => import("@/components/menu-page/products/product-card"),
  {
    loading: () => <Skeleton.Button active size="large" />,
    ssr: false,
  }
);
const CategoryTabs = dynamic(
  () => import("@/components/menu-page/products/category-tabs"),
  {
    ssr: false,
  }
);
const ProductsPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const menu = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCategoryId = Number(
        localStorage.getItem("selectedCategoryId")
      );
      setSelectedCategoryId(
        menu?.selectedCategory?.category_id || savedCategoryId
      );
    }
  }, [menu?.selectedCategory]);

  const { data: products, isLoading: isLoadingPro } =
    useProducts(selectedCategoryId);
  const { data: categories, isLoading: isLoadingCat } = useCategories();
  const selectedCategory = useMemo(() => {
    return categories?.result.find(
      (category) => category.category_id === selectedCategoryId
    );
  }, [categories, selectedCategoryId]);

  return (
    // ❗️ اضافه کردن return
    <div className="p-4  h-screen w-full flex flex-col gap-4">
      <Suspense fallback={<Spin />}>
        <CategoryTabs
          categories={categories?.result}
          selectedCategory={selectedCategory}
        />
      </Suspense>

      <ProductCategoryName
        name={selectedCategory?.name}
        isLoadingCatName={isLoadingCat}
      />

      {isLoadingPro ? (
        <div className="flex flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton.Button
              key={index}
              active
              size="large"
              className="w-full h-10"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto h-full pb-40">
          {products?.data?.length ? (
            products.data.map((product) => (
              <Suspense fallback={<Skeleton.Button active size="large" />}>
                <ProductCard product={product} key={product.product_id} />
              </Suspense>
            ))
          ) : (
            <div>محصولی در این دسته بندی وجود ندارد</div>
          )}
        </div>
      )}

      <CartNotification />
    </div>
  );
};

export default ProductsPage;
