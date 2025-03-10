import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-[#f0d9b0]  flex flex-col gap-4 w-full p-4 h-screen">
      <TopNavbarContainer />
      <div>{children}</div>
    </div>
  );
}
