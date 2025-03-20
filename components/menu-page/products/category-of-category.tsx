import Image from "next/image";

export default function LittleCategory({
  imgSrc,
  title,
}: {
  imgSrc: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        width={100}
        height={100}
        className="w-auto h-auto"
        src={imgSrc}
        alt="little category"
      />
      <span className="font-almarai">{title}</span>
    </div>
  );
}
