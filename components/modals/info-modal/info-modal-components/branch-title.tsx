import React from "react";

const BranchTitle = ({ title }: { title?: string | React.ReactNode }) => {
  return <h2 className="mt-2 text-center ">{title}</h2>;
};

export default BranchTitle;
