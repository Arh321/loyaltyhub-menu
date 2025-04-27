import { Category } from "@/types/menu/menu-types";
import { useEffect, useRef } from "react";
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
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const DEBOUNCE_DELAY = 50; // Reduced debounce delay
  const lastScrollTime = useRef<number>(0);
  const THROTTLE_DELAY = 16; // ~60fps

  const scrollToCategory = () => {
    if (selectedCategory?.category_id && scrollRef.current) {
      const element = document.getElementById(
        selectedCategory.category_id.toString()
      );
      if (element) {
        isScrolling.current = {
          ...isScrolling.current,
          isClickScrolling: true,
        };
        scrollRef.current.scrollTo({
          top: element.offsetTop - scrollRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = (parameter: keyof scrollStateProps) => {
    isScrolling.current = {
      ...isScrolling.current,
      [parameter]: true,
    };

    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(() => {
      isScrolling.current = {
        ...isScrolling.current,
        [parameter]: false,
      };
    }, DEBOUNCE_DELAY);
  };

  const handleProductsScrolling = () => {
    const now = Date.now();
    if (now - lastScrollTime.current < THROTTLE_DELAY) {
      return;
    }
    lastScrollTime.current = now;

    if (!isScrolling.current.isClickScrolling) {
      // handleScroll("isManualScrolling");
      // requestAnimationFrame(() => {
      //   const updatedTopIndexes: number[] = [];
      //   filteredCategories.forEach((item, index) => {
      //     const el = document.getElementById(String(item.category_id));
      //     const parent = el?.parentElement?.parentElement;
      //     if (el && parent) {
      //       const elRect = el.getBoundingClientRect();
      //       const parentRect = parent.getBoundingClientRect();
      //       const distanceFromParentTop = elRect.top - parentRect.top;
      //       if (
      //         scrollRef.current?.offsetHeight &&
      //         distanceFromParentTop < scrollRef.current?.offsetHeight / 2 - 64
      //       ) {
      //         updatedTopIndexes.push(index);
      //       }
      //     }
      //   });
      //   if (
      //     updatedTopIndexes.length !== topIndexs.current.length ||
      //     !updatedTopIndexes.every((val, idx) => val === topIndexs.current[idx])
      //   ) {
      //     setSelectedCategory(
      //       filteredCategories[updatedTopIndexes[updatedTopIndexes.length - 1]]
      //     );
      //     topIndexs.current = updatedTopIndexes;
      //   }
      // });
    } else {
      handleScroll("isClickScrolling");
    }
  };

  useEffect(() => {
    if (!isScrolling.current.isManualScrolling) scrollToCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return {
    scrollToCategory,
    scrollRef,
    handleProductsScrolling,
    tabScrolling: isScrolling.current.isClickScrolling,
  };
};

export default useHandleProductsScrolling;
