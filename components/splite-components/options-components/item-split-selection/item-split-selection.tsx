import { Swiper, SwiperSlide } from "swiper/react";
import { useItemSplitSelection } from "./useItemSplitSelection";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ParticipantsState } from "@/redux/participantsSlice/participantsSlice";
import ItemsToSplit from "./items-to-split-list";
import {
  AssignedItem,
  ItemSplitState,
} from "@/redux/participantsSlice/itemSplitSlice";

const ItemSplitSelection = () => {
  const { participants } = useSelector<RootState, ParticipantsState>(
    (state) => state.participants
  );
  const { assignments } = useSelector<RootState, ItemSplitState>(
    (state) => state.itemSplitSlice
  );
  const { availableItems, decreaseItem, increaseItem, resetAvailableItems } =
    useItemSplitSelection();

  const findParticipantItems = (participantId: string): AssignedItem[] => {
    const findItems = assignments.find(
      (item) => item.participantId == participantId
    );

    return findItems ? findItems.items : [];
  };

  return (
    <div className="w-full relative">
      <Swiper>
        {participants.map((participant, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col gap-2">
                <h3>{participant.name}</h3>
                <hr className="w-full border-b border-gray-300" />
                <div className="">
                  {findParticipantItems(participant.id).map(
                    (assignedItem, index) => {
                      return <span key={index}>{assignedItem.productId}</span>;
                    }
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full bg-light-secondary">
        {availableItems.map((item, index) => {
          return <ItemsToSplit key={index} product={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemSplitSelection;
