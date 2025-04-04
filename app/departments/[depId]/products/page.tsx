"use client";
import SplashScreen from "@/components/loading/splash-screen";
import ErrorComponent from "@/components/shared-components/error-component/error-component";
import MenusSectionContainer from "@/components/products-page/menus-section/menus-section-container";
import CategoriesSectionContainer from "@/components/products-page/categories-section/categories-section-container";
import useManageProducts from "@/hooks/useManageProducts";
import ProductsSectionContainer from "@/components/products-page/products-section/products-section-container";
import { useEffect, useRef, Suspense } from "react";
import BasketPopup from "@/components/products-page/products-section/basket-popup";
const ProductsPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    menus,
    selectedMenu,
    setSelectedMenu,
    isLoading,
    isError,
    refetch,
    isRefetching,
    selectedCategory,
    setSelectedCategory,
  } = useManageProducts();
  const scrollToCategory = () => {
    if (selectedCategory?.category_id && scrollRef.current) {
      const element = document.getElementById(
        selectedCategory.category_id.toString()
      );
      if (element) {
        scrollRef.current.scrollTo({
          top: element.offsetTop - scrollRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    scrollToCategory();
  }, [selectedCategory]);

  if (isLoading || isRefetching) return <SplashScreen />;
  if (isError) {
    return <ErrorComponent refetch={() => refetch()} />;
  }

  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full flex flex-col grow h-full">
        <div className="w-full flex flex-col shadow-xl">
          <MenusSectionContainer
            menus={menus ?? []}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <CategoriesSectionContainer
            categories={selectedMenu?.categories ?? []}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="w-full h-[calc(100%-204px)] overflow-hidden">
          <div
            ref={scrollRef}
            className="w-full h-full overflow-y-auto pb-[100px]"
          >
            <ProductsSectionContainer
              category={selectedMenu?.categories ?? []}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        <BasketPopup />
      </div>
    </Suspense>
  );
};

export default ProductsPage;
