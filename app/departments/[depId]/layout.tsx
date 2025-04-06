import HeaderContainer from "@/components/header/header-container";

const DepartmentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-light-background ">
      <HeaderContainer />

      {children}
    </div>
  );
};

export default DepartmentLayout;
