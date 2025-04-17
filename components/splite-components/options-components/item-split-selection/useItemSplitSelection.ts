import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IBasketState } from "@/types/menu/menu-types";

export const useItemSplitSelection = () => {
  const basket: IBasketState[] = useSelector(
    (state: RootState) => state.basket.basket
  );

  const [availableItems, setAvailableItems] = useState<IBasketState[]>([]);

  useEffect(() => {
    setAvailableItems(basket.map((item) => ({ ...item }))); // Clone to avoid mutation
  }, [basket]);

  const decreaseItem = (productId: number, qty: number = 1) => {
    setAvailableItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.productId !== productId) return item;
            const newQty = item.quantity - qty;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          })
          .filter(Boolean) as IBasketState[] // Remove nulls
    );
  };

  const increaseItem = (productId: number, qty: number = 1) => {
    const basketItem = basket.find((i) => i.productId === productId);
    if (!basketItem) return;

    setAvailableItems((prev) => {
      const exists = prev.find((i) => i.productId === productId);
      if (!exists) {
        return [
          ...prev,
          {
            ...basketItem,
            quantity: Math.min(qty, basketItem.quantity),
          },
        ];
      }

      return prev.map((item) => {
        if (item.productId !== productId) return item;
        const newQty = Math.min(item.quantity + qty, basketItem.quantity);
        return { ...item, quantity: newQty };
      });
    });
  };

  const resetAvailableItems = () => {
    setAvailableItems(basket.map((item) => ({ ...item })));
  };

  const getItemById = (productId: number) =>
    availableItems.find((i) => i.productId === productId);

  return {
    availableItems,
    decreaseItem,
    increaseItem,
    resetAvailableItems,
    getItemById,
  };
};
