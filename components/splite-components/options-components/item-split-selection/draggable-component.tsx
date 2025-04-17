import { useDraggable } from "@dnd-kit/core";
import { memo, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
const Draggable = ({ id, label }: { id: string; label: React.JSX.Element }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: React.MouseEvent) => {
    setStartPos({ x: event.clientX - 160, y: event.clientY - 80 });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setStartPos({ x: touch.clientX - 160, y: touch.clientY - 80 });
  };
  const style = {
    transform: CSS.Translate.toString(transform),
    touchAction: "none", // مهم برای موبایل
    color: "white",
    padding: "4px",

    borderRadius: "10px",
    fontWeight: 600,
    cursor: "grab",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    userSelect: "none",
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        userSelect: "none",
        zIndex: isDragging ? 1000 : 10,
        position: isDragging ? "fixed" : undefined,
        width: isDragging ? "160px" : "100%",
        height: isDragging ? "160px" : "100%",
        boxShadow: isDragging
          ? "0 4px 6px rgba(255,255,255,0.5)"
          : "0 4px 6px rgba(0,0,0,0.1)",
        left: isDragging ? `${startPos.x}px` : "10%",
        top: isDragging ? `${startPos.y}px` : "10%",
        margin: isDragging ? "auto" : "0",
      }}
      {...listeners}
      {...attributes}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="bg-light-secondary"
    >
      {label}
    </div>
  );
};

export default memo(Draggable);
