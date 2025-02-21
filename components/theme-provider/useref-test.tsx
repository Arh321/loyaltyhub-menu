"use client";
import { useCallback, useState } from "react";

const Child = ({ onClick }: { onClick: () => void }) => {
  console.log("Child رندر شد!");
  return <button onClick={onClick}>افزایش</button>;
};

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}
