import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-[#F0D5B6] mx-auto flex flex-col gap-4 w-full p-4 h-screen">
      <TopNavbarContainer />
      <div>{children}</div>
    </div>
  );
}
