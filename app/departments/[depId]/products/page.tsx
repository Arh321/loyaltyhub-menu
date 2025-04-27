"use client";
import SplashScreen from "@/components/loading/splash-screen";
import ErrorComponent from "@/components/shared-components/error-component/error-component";
import MenusSectionContainer from "@/components/products-page/menus-section/menus-section-container";
import CategoriesSectionContainer from "@/components/products-page/categories-section/categories-section-container";
import useManageProducts from "@/hooks/useManageProducts";
import ProductsSectionContainer from "@/components/products-page/products-section/products-section-container";
import { Suspense, useMemo } from "react";
import BasketPopup from "@/components/products-page/products-section/basket-popup";
import useHandleProductsScrolling from "@/hooks/useHandleProductsScrolling";

const ProductsPage = () => {
  const {
    menus,
    selectedMenu,
    setSelectedMenu,
    isError,
    refetch,
    isFetching,
    selectedCategory,
    setSelectedCategory,
  } = useManageProducts();

  const filteredCategories = useMemo(() => {
    return (
      menus
        .find((menu) => menu.menu_id === selectedMenu)
        ?.categories.filter((category) => category.category_id !== null) ?? []
    );
  }, [menus, selectedMenu]);

  const { scrollRef, handleProductsScrolling, tabScrolling } =
    useHandleProductsScrolling(selectedCategory);

  if (isFetching) return <SplashScreen />;
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
            categories={filteredCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="w-full h-[calc(100%-204px)] overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleProductsScrolling}
            id="products-scroll-container"
            className="w-full h-full overflow-y-auto pb-[200px]"
          >
            <ProductsSectionContainer
              category={filteredCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              tabScrolling={tabScrolling}
            />
          </div>
        </div>
        <BasketPopup />
      </div>
    </Suspense>
  );
};

export default ProductsPage;
