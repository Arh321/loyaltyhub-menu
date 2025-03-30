"use client";
import { useParams } from "next/navigation";

const DepartmentPage = () => {
  const { depId } = useParams();
  return <div>DepartmentPage{depId}</div>;
};

export default DepartmentPage;
