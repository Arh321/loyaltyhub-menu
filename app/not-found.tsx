"use client";
import NotFoundComponent from "@/components/not-found-page/not-found-component";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <NotFoundComponent
      title="صفحه مورد نظر یافت نشد"
      goBack={() => router.back()}
    />
  );
};

export default NotFound;
