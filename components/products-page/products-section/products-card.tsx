import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import { ISearchedProduct } from "@/types/products/products";
import ProductCardButton from "./product-card-button";
import { departmentsImageData } from "@/components/departments-page/departments-image-data";
import { useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { Product } from "@/types/menu/menu-types";
import ProductPrice from "./product-price";

interface IProductsCardProps {
  product: Product | ISearchedProduct;
  isSearch?: boolean;
}

const ProductsCard = ({ product }: IProductsCardProps) => {
  const router = useRouter();
  const { depId } = useParams();

  // Helper functions to handle different product types
  const getProductId = (product: Product | ISearchedProduct) => {
    return "product_id" in product ? product.product_id : product.id;
  };

  const getProductName = (product: Product | ISearchedProduct) => {
    return "name" in product ? product.name : product.title;
  };

  const getProductImage = (product: Product | ISearchedProduct) => {
    if ("thumbnail" in product && product.thumbnail?.url) {
      return product.thumbnail.url;
    }
    if ("image_url" in product) {
      return product.image_url;
    }
    return "";
  };

  const image = useMemo(() => {
    return (
      departmentsImageData.find((img) => img.id === getProductId(product))
        ?.image.src ?? ""
    );
  }, [product]);

  const productImage = getProductImage(product) || image;
  const productName = getProductName(product);
  const productId = getProductId(product);

  return (
    <div className="w-full h-full flex gap-4 bg-light-secondary rounded-lg shadow-md p-4 relative">
      <div className="w-max flex h-max flex-col items-center gap-4">
        <div
          role="button"
          onClick={() => {
            router.push(`/departments/${depId}/products/${productId}`);
          }}
          className="!size-[110px] bg-white rounded-lg shadow-md overflow-hidden"
        >
          <ImageWithLoader
            src={productImage}
            alt={productName}
            width={110}
            height={110}
            imageClass=" object-cover"
          />
        </div>
        <ProductCardButton product={product} />
      </div>
      <div
        role="button"
        onClick={() => {
          router.push(`/departments/${depId}/products/${productId}`);
        }}
        className="w-full"
      >
        <div className="w-full h-full flex flex-col gap-2 justify-between">
          <span className="text-light-secondary-text font-Yekan-Medium text-base">
            {productName}
          </span>
          <span className="text-light-secondary-text w-max self-end font-Yekan-Regular text-base">
            {productName}
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
