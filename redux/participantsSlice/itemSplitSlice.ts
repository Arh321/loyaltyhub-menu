import { IBasketState } from "@/types/menu/menu-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AssignedParticipant {
  participantId: string;
  items: IBasketState[];
}

export interface ItemSplitState {
  assignments: AssignedParticipant[];
}

const initialState: ItemSplitState = {
  assignments: [],
};

const itemSplitSlice = createSlice({
  name: "itemSplit",
  initialState,
  reducers: {
    assignItemToParticipant: (
      state,
      action: PayloadAction<{
        participantId: string;
        item: IBasketState;
      }>
    ) => {
      const { participantId, item } = action.payload;

      const participant = state.assignments.find(
        (p) => p.participantId === participantId
      );

      if (!participant) {
        state.assignments.push({
          participantId,
          items: [{ ...item, quantity: 1 }],
        });
      } else {
        const existing = participant.items.find(
          (i) => i.productId === item.productId
        );

        if (existing) {
          if (existing.quantity <= existing.quantity + 1) {
            existing.quantity += 1;
          }
        } else {
          participant.items.push({ ...item, quantity: 1 });
        }
      }
    },

    decreaseItemFromParticipant: (
      state,
      action: PayloadAction<{
        participantId: string;
        productId: number;
      }>
    ) => {
      const { participantId, productId } = action.payload;
      const participant = state.assignments.find(
        (p) => p.participantId === participantId
      );

      if (participant) {
        const item = participant.items.find((i) => i.productId === productId);
        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            participant.items = participant.items.filter(
              (i) => i.productId !== productId
            );
          }
        }
      }
    },

    resetItemSplit: (state) => {
      state.assignments = [];
    },
  },
});

export const {
  assignItemToParticipant,
  decreaseItemFromParticipant,
  resetItemSplit,
} = itemSplitSlice.actions;

export default itemSplitSlice.reducer;
