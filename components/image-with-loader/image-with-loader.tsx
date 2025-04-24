"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import logo from "@/public/images/logo.webp";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Props {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  imageClass?: string;
  placeholder?: StaticImageData;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  placeHolderSize?: {
    width: number;
    height: number;
  };
}

const ImageWithLoader = ({
  src,
  alt,
  width,
  height,
  imageClass = "",
  placeholder = logo,
  loading = "lazy",
  fetchPriority = "auto",
  placeHolderSize,
}: Props) => {
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const handleImageLoad = () => setIsLoaded(true);
  const handleImageError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  const shouldUseFill = !width || !height;

  const conditionalPlaceHolderSize = useMemo(() => {
    if (placeHolderSize) {
      return {
        width: placeHolderSize.width,
        height: placeHolderSize.height,
      };
    }
    return {
      width: companyLogo ? 50 : 80,
      height: companyLogo ? 50 : 80,
    };
  }, [companyLogo, placeHolderSize]);

  return (
    <div
      ref={ref}
      className={clsx(
        "relative overflow-hidden bg-light-secondary",
        shouldUseFill && "w-full aspect-square", // fallback aspect ratio
        imageClass
      )}
    >
      {/* Placeholder while loading or error */}
      {(!isLoaded || hasError || !src) && (
        <Image
          src={companyLogo ?? placeholder}
          alt={company?.name ?? alt}
          width={conditionalPlaceHolderSize.width}
          height={conditionalPlaceHolderSize.height}
          className="absolute inset-0 m-auto object-contain opacity-80"
        />
      )}

      {/* Real image */}
      {inView && !hasError && src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={shouldUseFill}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
          fetchPriority={fetchPriority}
          className={clsx(
            "transition-opacity duration-700 ease-in-out object-cover",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
