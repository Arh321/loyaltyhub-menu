import Image from "next/image";
import dotsImage from "@/public/images/Rectangle 48.png";
const GRID_COLUMNS = 30;
const GRID_ROWS = 20; // کاهش تعداد ردیف‌ها برای تنظیم بهتر فاصله
const DOT_SIZE = 0.5; // اندازه دایره
const GAP_SIZE = DOT_SIZE * 0.1; // فاصله بین نقاط

export default function DotGrid() {
  return (
    // <div
    //   className="absolute inset-0 w-full h-full grid overflow-hidden"
    //   style={{
    //     gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(0, 1fr))`,
    //     gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
    //     gap: `${GAP_SIZE}px`,
    //     // background: `linear-gradient(to right, #151518 100%, #151518 80%, #151518 0%, #151518 80%, #151518 100%)`,
    //   }}
    // >
    //   {Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map((_, index) => (
    //     <div key={index} className="group flex items-center justify-center">
    //       <div className="h-[6px] w-[6px] rounded-full bg-white opacity-20" />
    //     </div>
    //   ))}
    // </div>
    <div
      style={{
        backgroundImage: "url(/images/Rectangle-48.png)",
        backgroundRepeat: "repeat",
      }}
      className="w-full h-full relative"
    >
      <div
        style={{
          background: "linear-gradient(to right,#151518,transparent,#151518)",
        }}
        className="w-full h-full absolute inset-0 m-auto"
      ></div>
      {/* <Image
        src={dotsImage}
        width={400}
        height={200}
        alt="dotsImage"
        className="w-full h-full object-cover"
      /> */}
    </div>
  );
}
