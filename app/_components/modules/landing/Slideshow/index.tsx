"use client";
import clsx from "clsx";
import { useEffect } from "react";

type Props = {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  interval: number;
};

export const Slideshow = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  interval,
}: Props) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, interval, images]);

  return (
    <div
      className={clsx(
        "relative w-full h-[250px] mt-2",
        "md:w-[1070px] sm:h-[453px] lg:h-[483px] xl:h-[752px]"
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 bg-contain bg-no-repeat bg-center ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  );
};
