import MenuCategories from "@/components/menu-page/menu-categories";
import RulesModal from "@/components/modals/rules-modal/rules-modal";
import InfoModal from "@/components/modals/info-modal/info-modal-container/info-modal";
import WorkTimesDrawer from "@/components/drawers/work-times-bottom";
export default function MenuPage() {
  return (
    <div className="h-screen overflow-auto   text-center pb-40">
      <MenuCategories />
    </div>
  );
}
