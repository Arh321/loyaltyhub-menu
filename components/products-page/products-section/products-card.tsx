import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import { Product } from "@/types/menu/menu-types";
import ProductCardButton from "./product-card-button";
import { departmentsImageData } from "@/components/departments-page/departments-image-data";
interface IProductsCardProps {
  product: Product;
}

const ProductsCard = ({ product }: IProductsCardProps) => {
  return (
    <div className="w-full h-full flex gap-4 bg-light-secondary rounded-lg shadow-md p-4 relative">
      <div className="w-max flex h-max flex-col items-center gap-4">
        <div className="!size-[110px] bg-white rounded-lg shadow-md overflow-hidden">
          <ImageWithLoader
            src={
              departmentsImageData.find((image) => image.id === product.id)
                ?.image.src ?? ""
            }
            alt={product.title}
            width={110}
            height={110}
            imageClass=" object-cover"
          />
        </div>
        <ProductCardButton product={product} />
      </div>
      <div className="w-full">
        <div className="w-full h-full flex flex-col gap-2 justify-between">
          <span className="text-light-text font-Yekan-Medium text-base">
            {product.title}
          </span>
          <span className="text-light-text w-max self-end font-Yekan-Regular text-base">
            {product.title}
          </span>
          <span className="w-max self-end">
            <ProductPrice price={product.price} discount={product.discount} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

const ProductPrice = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  return discount && discount > 0 ? (
    <span dir="rtl" className="w-full flex items-center gap-2">
      <span dir="ltr" className="line-through text-red-600">
        {price.toLocaleString("fa-IR")}
      </span>
      <span>
        <span dir="ltr">
          {(price - price * (discount / 100)).toLocaleString("fa-IR")}
        </span>
        <span className="pr-1">تومان</span>
      </span>
    </span>
  ) : (
    <span className="w-full text-light-secondaryText">
      <span>{price.toLocaleString("fa-IR")}</span>
      <span className="pr-1">تومان</span>
    </span>
  );
};
