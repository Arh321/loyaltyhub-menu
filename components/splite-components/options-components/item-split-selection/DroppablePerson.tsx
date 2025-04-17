import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import { AssignedParticipant } from "@/redux/participantsSlice/itemSplitSlice";
import { Participant } from "@/redux/participantsSlice/participantsSlice";

const AssignMentsList = ({
  assignments,
  handleUndoItem,
  p,
}: {
  assignments: AssignedParticipant[];
  handleUndoItem: (participantId: string, productId: number) => void;
  p: Participant;
}) => {
  return (
    <ul className="text-sm space-y-1 grow flex flex-col">
      {assignments
        .find((a) => a.participantId === p.id)
        ?.items.map((item) => (
          <li key={item.productId} className="flex items-center gap-2">
            <ImageWithLoader
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              imageClass="!size-[50px] object-cover"
            />
            <span>{item.title}</span>
            <span className="text-xs text-gray-500 ml-auto">
              x{item.quantity}
            </span>
            <button
              className="text-red-500 text-xs px-2 py-1 rounded hover:bg-red-100"
              onClick={() => handleUndoItem(p.id, item.productId)}
            >
              حذف یکی
            </button>
          </li>
        )) || (
        <li className="text-gray-400 font-Yekan-Regular w-full h-full flex items-center justify-center grow">
          هنوز آیتمی اضافه نشده
        </li>
      )}
    </ul>
  );
};

export default AssignMentsList;
