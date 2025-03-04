import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/app/store/cartSlice";
import Button from "./button";
import { RootState } from "@/app/store/store";
import { Category, Product } from "@/app/types/api-menu/menu";
import { PlusSquareOutlined, WindowsFilled } from "@ant-design/icons";
import { setMenuData } from "@/app/store/menuSlice";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleSelectProduct = () => {
    dispatch(setMenuData({ selectedProduct: product }));
    router.push(window.location.pathname + `/${product.id}`);
  };
  return (
    <div
      className="flex flex-col font-almarai text-sm text-black bg-green-200 p-3 gap-6 rounded-lg shadow-md w-full "
      dir="rtl"
      onClick={handleSelectProduct}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <Image
            // src={product.thumbnail.url} در api اضافه شود
            src="/images/hamburger-test.jpg"
            alt={"عکس محصول"}
            width={100}
            height={100}
            className="rounded-md aspect-square"
          />
          <h3 className="font-bold">{product.thumbnail.name}</h3>
        </div>
        <p className="text-sm text-gray-600">
          {/* {product?.titleEn} در api اضافه شود */}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-3 items-center w-[30%]">
          {cart.items.find((product1) => product1.id !== product.id) ? (
            <Button
              className="text-gray-600 flex justify-between items-center gap-2 border rounded-lg border-gray-600 font-bold hover:bg-gray-300 transition-all"
              onClick={() => dispatch(addItem(product))}
            >
              <span>+</span>
              <span>افزودن</span>
            </Button>
          ) : (
            <>
              <Button
                onClick={() => dispatch(addItem(product))}
                className="p-1 !border rounded-sm"
              >
                +
              </Button>
              <span>{cart.totalQuantity}</span>
              <Button
                onClick={() => dispatch(removeItem(product.id))}
                className="p-1 !border rounded-sm"
              >
                -
              </Button>
            </>
          )}
        </div>
        <p className="mt-2 text-md font-semibold font-almarai">
          {product.price.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
