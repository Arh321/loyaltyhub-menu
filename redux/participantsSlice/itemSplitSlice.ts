import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Participant } from "./participantsSlice";
import { IBasketState } from "@/types/menu/menu-types";

export interface ISharedBetween extends Participant {
  quantity: number;
}

export interface SharedItem {
  productId: number;
  sharedBetween: ISharedBetween[]; // participant IDs
}

export interface ItemSplitState {
  sharedItems: SharedItem[];
  errorMessage: string | undefined;
}

const initialState: ItemSplitState = {
  sharedItems: [],
  errorMessage: undefined,
};

const itemSplitSlice = createSlice({
  name: "itemSplit",
  initialState,
  reducers: {
    assignParticipantToItem: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
      }>
    ) => {
      const { product, participant } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (!item) {
        // زمانی که "همه" انتخاب شده و quantity محصول برابر ۱ است
        if (participant.id === "1000" && product.quantity === 1) {
          state.sharedItems = [
            {
              productId: product.productId,
              sharedBetween: [
                {
                  ...participant,
                  quantity: product.quantity,
                },
              ],
            },
          ];

          return;
        } else {
          state.sharedItems.push({
            productId: product.productId,
            sharedBetween: [{ ...participant, quantity: 1 }],
          });
        }
      } else {
        const findPerson = item.sharedBetween.find(
          (shared) => shared.id === participant.id
        );

        // اگر "همه" انتخاب شده و تعداد محصول برابر با تعداد "همه" باشد
        const allSelected = item.sharedBetween.some(
          (shared) => shared.id === "1000"
        );
        const totalQuantity = item.sharedBetween.reduce(
          (sum, shared) => sum + shared.quantity,
          0
        );

        if (allSelected && totalQuantity === product.quantity) {
          // اگر "همه" انتخاب شده و تعداد کل برابر با quantity محصول باشد، هیچ فرد دیگری نمی‌تواند اضافه شود
          state.errorMessage =
            "محدودیت: دیگر نمی‌توانید شخص جدیدی اضافه کنید چون همه محصول به تعداد مشخص تقسیم شده است.";
          return; // جلوی اضافه شدن فرد جدید را می‌گیریم
        }

        // اگر فرد بخواهد بیشتر از موجودی محصول quantity اضافه کند
        if (findPerson && findPerson.quantity + 1 > product.quantity) {
          state.errorMessage =
            "خطا: شما نمی‌توانید بیشتر از موجودی محصول تعداد را افزایش دهید.";
          return;
        }

        if (
          findPerson &&
          findPerson.quantity + 1 === product.quantity &&
          participant.id === "1000"
        ) {
          state.sharedItems = [
            {
              productId: product.productId,
              sharedBetween: [
                {
                  ...participant,
                  quantity: product.quantity,
                },
              ],
            },
          ];
          return;
        }

        // اگر فرد مورد نظر موجود باشد، تعدادش افزایش پیدا کند
        if (findPerson && findPerson.quantity + 1 <= product.quantity) {
          findPerson.quantity++;
        }

        // اگر فرد مورد نظر پیدا نشد، او را اضافه کنیم
        if (!findPerson) {
          item.sharedBetween.push({
            ...participant,
            quantity: 1,
          });
        }

        // اگر "همه" انتخاب شده و کسی غیر از "همه" در لیست باشد، او را حذف کنیم
        if (allSelected && totalQuantity === product.quantity) {
          item.sharedBetween = item.sharedBetween.filter(
            (shared) => shared.id === "1000"
          );
        }
      }
    },
    removeParticipantFromItem: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
      }>
    ) => {
      const { product, participant } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (item) {
        const person = item.sharedBetween.find((p) => p.id === participant.id);

        if (person) {
          if (person.quantity > 1) {
            person.quantity--;
          } else {
            item.sharedBetween = item.sharedBetween.filter(
              (p) => p.id !== participant.id
            );
          }

          // اگه هیچکس دیگه شریک نبود → پاکش کن از لیست
          if (item.sharedBetween.length === 0) {
            state.sharedItems = state.sharedItems.filter(
              (i) => i.productId !== product.productId
            );
          }
        }
      }
    },
    setParticipantItemQuantity: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
        quantity: number;
      }>
    ) => {
      const { product, participant, quantity } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (!item) {
        if (quantity > 0) {
          state.sharedItems.push({
            productId: product.productId,
            sharedBetween: [{ ...participant, quantity }],
          });
        }
        return;
      }

      const person = item.sharedBetween.find((p) => p.id === participant.id);

      if (!person && quantity > 0) {
        item.sharedBetween.push({ ...participant, quantity });
      }

      if (person) {
        if (quantity <= 0) {
          item.sharedBetween = item.sharedBetween.filter(
            (p) => p.id !== participant.id
          );
        } else {
          person.quantity = quantity;
        }
      }

      if (item.sharedBetween.length === 0) {
        state.sharedItems = state.sharedItems.filter(
          (i) => i.productId !== product.productId
        );
      }
    },
    resetItemSplit: (state) => {
      state.sharedItems = [];
    },
    resetMessege: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  assignParticipantToItem,
  removeParticipantFromItem,
  resetItemSplit,
  setParticipantItemQuantity,
  resetMessege,
} = itemSplitSlice.actions;

export default itemSplitSlice.reducer;
