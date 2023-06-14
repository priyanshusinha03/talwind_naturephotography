"use client";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Img1 from "../assets/Images/LJP.jpg";
import Img2 from "../assets/Images/gd.png";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel() {
  const imagess = [
    {
      src: Img1,
      alt: "Image_1 ",
    },

    {
      src: Img2,
      alt: "ss",
    },
    {
      src: Img1,
      alt: "ss",
    },
    {
      src: Img1,
      alt: "ss",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === imagess.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? imagess.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {imagess?.map((image, index) => {
            if (index === currentSlide) {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  //   width={1280}
                  //   height={500}
                  style={{ width: "100%", height: "100%" }}
                  className="animate-fadeIn"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="absolute left-[47%] bottom-[35px] z-20 flex justify-center p-2">
        {imagess.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
