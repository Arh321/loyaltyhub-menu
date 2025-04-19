import { IBasketState } from "@/types/menu/menu-types";
import ItemsToSplit from "./items-to-split-list";
import { ISharedBetween } from "@/redux/participantsSlice/itemSplitSlice";
import { Participant } from "@/redux/participantsSlice/participantsSlice";
import { useDroppable } from "@dnd-kit/core";
import { DeleteOutlined } from "@ant-design/icons";

const DroppableProduct = ({
  id,
  product,
  sharedItems,
  handleRemove,
}: {
  id: string;
  product: IBasketState;
  sharedItems: ISharedBetween[];
  handleRemove: (participant: Participant) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        background: isOver ? "#4ade80" : "var(--secondary)",
      }}
      className="w-full aspect-square rounded bg-light-secondary"
    >
      <ItemsToSplit product={product} />
      <div className="w-full flex items-center gap-2">
        {sharedItems.map((shared) => {
          return (
            <span
              key={shared.id}
              className="size-8 font-Yekan-Light text-xs rounded-full flex items-center justify-center text-white bg-black/30 relative"
            >
              {shared.id == "1000" ? (
                "همه"
              ) : (
                <span>
                  {shared.name.charAt(0)}&nbsp;{shared.name.charAt(1)}
                </span>
              )}
              <span className="absolute top-0 left-0 text-light-secondary-text">
                {shared.quantity}
              </span>
              <span
                onClick={() =>
                  handleRemove({
                    id: shared.id,
                    name: shared.name,
                  })
                }
                className="absolute top-0 right-0 text-light-primary"
              >
                <DeleteOutlined />
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DroppableProduct;
