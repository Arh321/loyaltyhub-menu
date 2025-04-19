import {
  DndContext,
  DragOverlay,
  useSensors,
  TouchSensor,
  useSensor,
} from "@dnd-kit/core";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Participant } from "@/redux/participantsSlice/participantsSlice";
import DroppableProduct from "./DroppableItem";
import DraggablePerson from "./draggable-component";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { RestOutlined } from "@ant-design/icons";
import { useItemSplitSelection } from "./useItemSplitSelection";

// ستاپ سنسورها

const SplitModelContainer = ({
  handleChoseOption,
}: {
  handleChoseOption: () => void;
}) => {
  const {
    draggedPerson,
    setDraggedPerson,
    handleRemove,
    handleDragEnd,
    sharedItems,
    participantsWithAll,
    handleResetSharedItems,
    basket,
  } = useItemSplitSelection();

  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={(event) => {
        const id = event.active.id;
        const dragged = participantsWithAll.find((p) => p.id === id);
        console.log(dragged);
        setDraggedPerson(dragged || null);
      }}
    >
      <div className="w-full h-full flex flex-col px-2 relative">
        <div className="w-full flex flex-col gap-2 ">
          <h2 className="mb-2 w-full text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
            <Icon icon="mynaui:user" width={14} height={14} />
            <span>دوستان</span>
          </h2>
          <div className="w-full flex items-center overflow-x-auto gap-4">
            {participantsWithAll.map((person) => (
              <DraggablePerson
                key={person.id}
                id={person.id}
                name={person.name}
              />
            ))}
          </div>
        </div>
        <div className="w-full px-4 my-4">
          <div className="w-full h-1 border-gradient-primary border-b-2 border-light-primary"></div>
        </div>
        <div className="w-full grow flex flex-col gap-2">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className="w-max text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
              <Icon
                icon="qlementine-icons:items-grid-16"
                width="14"
                height="14"
              />
              <span className="font-[300]">آیتم‌ها:</span>
            </h2>
            <CTAButton
              onClick={handleResetSharedItems}
              className="!w-max p-2 !bg-red-600/30 border-red-600 !text-xs !font-Yekan-Light"
            >
              <RestOutlined />
              <span className="pr-1">بازنشانی</span>
            </CTAButton>
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            {basket.map((item) => (
              <DroppableProduct
                key={item.productId}
                id={item.productId.toString()}
                product={item}
                sharedItems={
                  sharedItems.find(
                    (shared) => shared.productId == item.productId
                  )?.sharedBetween ?? []
                }
                handleRemove={(participant: Participant) =>
                  handleRemove({
                    product: item,
                    participant: participant,
                  })
                }
              />
            ))}
          </div>
        </div>
        {/* دکمه نهایی */}
        <div
          style={{
            background:
              "linear-gradient(to top,var(--background-theme),transparent)",
          }}
          className="bottom-0 pb-4 right-0 left-0 absolute px-4"
        >
          <CTAButton
            className=" !h-max !p-2 mx-auto"
            onClick={handleChoseOption}
          >
            ثبت و دیدن نتیجه
          </CTAButton>
        </div>
      </div>
      {/* فقط نمای شناور شخص درگ‌شده */}
      <DragOverlay>
        {draggedPerson ? (
          <div
            style={{
              padding: "8px 12px",
              background: "#eee",
              borderRadius: "8px",
              boxShadow: "0 0 12px rgba(0,0,0,0.2)",
              userSelect: "none",
              pointerEvents: "none",
              touchAction: "none",
            }}
          >
            👻 {draggedPerson.name}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default SplitModelContainer;
