import HeaderContainer from "@/components/header/header-container";

const DepartmentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-light-background ">
      <HeaderContainer />
      <div className="w-full px-4">
        <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
      </div>
      {children}
    </div>
  );
};

export default DepartmentLayout;
