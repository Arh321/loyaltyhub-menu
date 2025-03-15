import React from "react";

const BranchTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="mt-2 text-lg font-bold text-center text-gray-800">
      {title}
    </h2>
  );
};

export default BranchTitle;
