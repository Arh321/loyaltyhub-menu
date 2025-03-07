import Image from "next/image";

export default function LittleCategory({ imgSrc, title }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img width="auto" height="auto" src={imgSrc} alt="little category" />
      <span className="font-almarai">{title}</span>
    </div>
  );
}
