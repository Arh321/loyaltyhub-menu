import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IBasketState } from "@/types/menu/menu-types";
import { Participant } from "@/redux/participantsSlice/participantsSlice";
import {
  assignParticipantToItem,
  removeParticipantFromItem,
  resetItemSplit,
  resetMessege,
} from "@/redux/participantsSlice/itemSplitSlice";
import { useNotify } from "@/components/shared-components/notife/notife";

export const useItemSplitSelection = () => {
  const [draggedPerson, setDraggedPerson] = useState<Participant | null>(null);
  const { basket } = useSelector((state: RootState) => state.basket);
  const { participants } = useSelector(
    (state: RootState) => state.participants
  );
  const { sharedItems, errorMessage } = useSelector(
    (state: RootState) => state.itemSplitSlice
  );
  const { notify } = useNotify();
  const participantsWithAll = useMemo(() => {
    const allGuys = {
      id: "1000",
      name: "همه",
    };
    return participants ? [allGuys, ...participants] : [allGuys];
  }, [participants]);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (e: any) => {
    const { over, active } = e;
    if (!over || String(active.id) === String(over.id)) return;

    const itemId = parseInt(over.id);
    const personId = active.id;
    if (itemId && personId) {
      const findProduct = basket.find((pr) => pr.productId == itemId);
      const findPerson =
        personId == "1000"
          ? {
              id: "1000",
              name: "همه",
            }
          : participants.find((participant) => participant.id == personId);

      if (findProduct && findPerson) {
        dispatch(
          assignParticipantToItem({
            participant: findPerson,
            product: findProduct,
          })
        );
      }
    }
  };

  const handleRemove = (payload: {
    product: IBasketState;
    participant: Participant;
  }) => {
    dispatch(removeParticipantFromItem(payload));
  };

  useEffect(() => {
    if (errorMessage) {
      notify("error", errorMessage ?? "");
      setTimeout(() => {
        dispatch(resetMessege());
      }, 300);
    }
  }, [errorMessage]);

  const handleResetSharedItems = () => {
    dispatch(resetItemSplit());
  };

  return {
    draggedPerson,
    setDraggedPerson,
    handleRemove,
    handleDragEnd,
    sharedItems,
    participantsWithAll,
    handleResetSharedItems,
    basket,
  };
};
