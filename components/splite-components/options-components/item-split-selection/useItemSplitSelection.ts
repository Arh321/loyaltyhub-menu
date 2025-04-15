// hooks/useItemSplitSelection.ts
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IBasketState } from "@/types/menu/menu-types";

export const useItemSplitSelection = () => {
  const basket: IBasketState[] = useSelector(
    (state: RootState) => state.basket.basket
  );

  const [availableItems, setAvailableItems] = useState<IBasketState[]>([]);

  // Sync with basket on initial load
  useEffect(() => {
    setAvailableItems(basket);
  }, [basket]);

  const decreaseItem = (productId: number, qty: number = 1) => {
    setAvailableItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - qty }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseItem = (productId: number, qty: number = 1) => {
    const basketItem = basket.find((i) => i.productId === productId);
    if (!basketItem) return;

    setAvailableItems((prev) =>
      prev.map((item) => {
        if (item.productId === productId) {
          const newQty = item.quantity + qty;
          return {
            ...item,
            quantity:
              newQty > basketItem.quantity ? basketItem.quantity : newQty,
          };
        }
        return item;
      })
    );
  };

  const resetAvailableItems = () => {
    setAvailableItems(basket);
  };

  return {
    availableItems,
    decreaseItem,
    increaseItem,
    resetAvailableItems,
  };
};
