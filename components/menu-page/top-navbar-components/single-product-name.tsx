import { useParams } from "next/navigation";
import React from "react";

const SingleProductName = () => {
  const productId = useParams();
  return <div>productname based on productid</div>;
};

export default SingleProductName;
