import { Category } from "@/types/menu/menu-types";
import { useEffect, useRef, useState } from "react";
// import useScrollStatus from "./useScrollStatus";
interface scrollStateProps {
  isClickScrolling: boolean;
  isManualScrolling: boolean;
}

const useHandleProductsScrolling = (
  selectedCategory: Category | null
  // filteredCategories: Category[],
  // setSelectedCategory: Dispatch<SetStateAction<Category | null>>
) => {
  // const topIndexs = useRef<number[]>([0]);
  const isScrolling = useRef<scrollStateProps>({
    isClickScrolling: false,
    isManualScrolling: false,
  });
  const [scroll, setScroll] = useState<scrollStateProps>({
    isClickScrolling: false,
    isManualScrolling: false,
  });
  // const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const DEBOUNCE_DELAY = 450; // Reduced debounce delay

  const scrollToCategory = () => {
    if (selectedCategory?.category_id && scrollRef.current) {
      const element = document.getElementById(
        selectedCategory.category_id.toString()
      );
      if (element) {
        setScroll({
          isClickScrolling: true,
          isManualScrolling: false,
        });
        scrollRef.current.scrollTo({
          top: element.offsetTop - scrollRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = (parameter: keyof scrollStateProps) => {
    const timeoutIdRef = setTimeout(() => {
      setScroll((prev) => {
        return { ...prev, [parameter]: false };
      });
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutIdRef);

    // if (timeoutIdRef.current) {
    //   clearTimeout(timeoutIdRef.current);

    //   timeoutIdRef.current = setTimeout(() => {
    //     isScrolling.current = {
    //       ...isScrolling.current,
    //       [parameter]: false,
    //     };
    //   }, DEBOUNCE_DELAY);
    // }
  };

  const handleProductsScrolling = () => {
    if (scroll.isClickScrolling) {
      handleScroll("isClickScrolling");
    } else {
      if (!scroll.isManualScrolling && !scroll.isClickScrolling) {
        setScroll({
          isClickScrolling: false,
          isManualScrolling: true,
        });
      }
      handleScroll("isManualScrolling");
    }
  };

  useEffect(() => {
    if (!scroll.isManualScrolling) scrollToCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return {
    scrollToCategory,
    scrollRef,
    handleProductsScrolling,
    tabScrolling: scroll.isClickScrolling && !scroll.isManualScrolling,
  };
};

export default useHandleProductsScrolling;
