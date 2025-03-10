import MenuCategories from "@/components/menu-page/menu-categories";
import { useBranchInfo } from "@/app/hooks/useBranches";
export default function MenuPage() {
  return (
    <div className="h-screen overflow-auto   text-center pb-40">
      <MenuCategories />
    </div>
  );
}
