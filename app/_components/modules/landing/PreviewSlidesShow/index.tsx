"use client";

import clsx from "clsx";
import { useState } from "react";
import { Slideshow } from "../Slideshow";
import { PreviewController } from "./PreviewController";

export const PreviewSlidesShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/landing/preview-links-desktop.jpg",
    "/landing/preview-profile-desktop.jpg",
    "/landing/preview-preview-desktop.jpg",
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={clsx(
        "relative flex justify-center items-center m-auto rounded-3xl lg:bg-[#F5F5F7] py-5 md:py-12",
        "w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
      )}
    >
      <PreviewController
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />

      <Slideshow
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        interval={10000}
      />
    </div>
  );
};
