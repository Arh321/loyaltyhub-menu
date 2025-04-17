"use client";

import { DndContext, useDroppable } from "@dnd-kit/core";

import { useItemSplitSelection } from "./useItemSplitSelection";
import ItemsToSplit from "./items-to-split-list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ParticipantsState } from "@/redux/participantsSlice/participantsSlice";
import {
  assignItemToParticipant,
  decreaseItemFromParticipant,
  ItemSplitState,
  resetItemSplit,
} from "@/redux/participantsSlice/itemSplitSlice";
import { IBasketState } from "@/types/menu/menu-types";
import AssignMentsList from "./DroppablePerson";
import { Icon } from "@iconify/react/dist/iconify.js";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import DraggableComponent from "./draggable-component";
import { useMemo } from "react";
export interface AssignedItem {
  productId: number;
  image: string;
  title: string;
  quantity: number;
}

export interface AssignedParticipant {
  personId: string;
  items: AssignedItem[];
}

const Droppable = ({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        minHeight: "120px",
        background: isOver ? "#4ade80" : "var(--secondary)",
        border: "3px dashed #a1a1aa",
        borderRadius: "12px",
        padding: "16px",
        transition: "background 0.2s ease",
      }}
      className="flex flex-col "
    >
      {children || <p className="text-center text-gray-600">Drop here</p>}
    </div>
  );
};

interface DnDExampleProps {
  handleChoseOption: () => void;
}

const DnDExample: React.FC<DnDExampleProps> = ({ handleChoseOption }) => {
  const { availableItems, decreaseItem, increaseItem, resetAvailableItems } =
    useItemSplitSelection();

  const { participants } = useSelector<RootState, ParticipantsState>(
    (state) => state.participants
  );

  const participantsWithAll = useMemo(() => {
    const allGuys = {
      id: "1000",
      name: "همه دوستان",
    };
    return participants ? [allGuys, ...participants] : [allGuys];
  }, [participants]);

  const { assignments } = useSelector<RootState, ItemSplitState>(
    (state) => state.itemSplitSlice
  );
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
    const { over, active } = event;

    if (!over || active.id === over.id) return;

    const personId = over.id;
    const item = availableItems.find(
      (i: IBasketState) => i.productId === parseInt(active.id)
    );
    if (!item) return;

    // 1. تخصیص آیتم به فرد در Redux
    dispatch(
      assignItemToParticipant({
        participantId: personId,
        item,
      })
    );

    // 2. کم کردن آیتم از لیست موقت قابل تخصیص
    decreaseItem(item.productId, 1);
  };

  const handleUndoItem = (participantId: string, productId: number) => {
    const person = assignments.find((a) => a.participantId === participantId);
    const item = person?.items.find((i) => i.productId === productId);
    if (!item) return;

    // اگر بیشتر از 1 تا بود، فقط یکی کم کن
    if (item.quantity > 1) {
      dispatch(
        assignItemToParticipant({
          participantId,
          item: {
            ...item,
            quantity: item.quantity - 1,
          },
        })
      );
    } else {
      // فقط یکی مونده بود → حذفش کن
      dispatch(decreaseItemFromParticipant({ participantId, productId }));
    }

    // افزایش در availableItems
    increaseItem(productId, 1);
  };

  const handleReset = () => {
    dispatch(resetItemSplit());
    resetAvailableItems();
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="px-2 pt-2 max-w-md mx-auto h-full relative flex flex-col ">
        <div className="max-h-1/2 min-h-[40%] overflow-y-auto m-0 relative">
          <h2 className="mb-2 w-full text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
            <Icon
              icon="qlementine-icons:items-grid-16"
              width="14"
              height="14"
            />
            <span className="font-[300]">آیتم‌ها:</span>
          </h2>
          <div className="w-full grid grid-cols-2 gap-2">
            {availableItems.map((item, index) => {
              return (
                <DraggableComponent
                  key={index}
                  id={item.productId.toString()}
                  label={<ItemsToSplit product={item} />}
                />
              );
            })}
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top,var(--background-theme),transparent)",
            }}
            className="sticky h-4 bottom-0 right-0 border-b border-light-secondary"
          ></div>
          {/* <Draggable id="pizza-2" label="🍕 پیتزا ۲" /> */}
        </div>

        <div className="grow overflow-y-auto m-0 pt-2 pb-8 relative transition-all">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className=" w-max text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
              <Icon icon="mynaui:users-group" width="20" height="20" />
              <span>افراد:</span>
            </h2>
            <CTAButton
              onClick={handleReset}
              className="!w-max p-2 !bg-red-600/30 border-red-600 !text-xs !font-Yekan-Light"
            >
              بازنشانی
            </CTAButton>
          </div>
          <div className="space-y-4 flex flex-col">
            {participantsWithAll.map((p) => (
              <Droppable key={p.id} id={p.id}>
                <p className="text-center text-light-secondary-text font-Yekan-Medium mb-2">
                  {p.name}
                </p>
                <AssignMentsList
                  assignments={assignments}
                  handleUndoItem={handleUndoItem}
                  p={p}
                />
              </Droppable>
            ))}
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top,var(--background-theme),transparent)",
            }}
            className="sticky h-4 bottom-0 right-0"
          ></div>
        </div>
        <CTAButton
          className="absolute bottom-0 right-0 left-0 !w-2/3 !h-max !p-2 mx-auto"
          onClick={handleChoseOption}
        >
          ثبت و دیدن نتیجه
        </CTAButton>
      </div>
    </DndContext>
  );
};

export default DnDExample;
