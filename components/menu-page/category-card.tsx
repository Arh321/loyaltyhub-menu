import React from "react";

interface CategoryCardProps {
  imageUrl: string | null;
  titleFa: string | null;
  titleEn?: string | null;
  key: number | null;
  expand?: boolean | null;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  titleFa,
  titleEn,
  key,
  expand,
}) => {
  return (
    <div
      key={key}
      className="relative max-w-full h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.02]"
    >
      {/* تصویر پس‌زمینه */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      {/* لایه تاریک (Overlay) */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* متن‌ها */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2
          className={`${expand ? "text-2xl" : "text-lg"} text-white font-bold`}
        >
          {" "}
          {titleFa}
        </h2>
        <p className="text-white text-sm mt-2">{titleEn}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
