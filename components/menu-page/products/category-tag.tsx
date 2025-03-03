import React from "react";

const CategoryTag = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full p-2 border-white text-black font-almarai">
      {title}
    </div>
  );
};

export default CategoryTag;
