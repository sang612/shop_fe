"use client";

import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ImageSlider = ({ slideItem }) => {
  const imageSwiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 1,
    };

    Object.assign(imageSwiperRef.current, params);

    // initialize swiper
    imageSwiperRef.current.initialize();
  }, []);

  const handlePrev = useCallback(() => {
    if (!imageSwiperRef.current) return;
    imageSwiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!imageSwiperRef.current) return;
    imageSwiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full relative group">
      <swiper-container
        init="false"
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        navigation="false"
        pagination="false"
        ref={imageSwiperRef}
      >
        {slideItem.map((item) => {
          return (
            <swiper-slide key={item.key}>
              <img src={item.image} className="w-full object-cover" />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div
        className="prev-arrow hidden md:inline-block left-[50px] m-[5px] cursor-pointer hover:bg-[#000] hover:opacity-100 select-none bg-transparent
    h-[36px] w-[36px] border-solid border-[2px] border-[#fff]  rounded-full absolute z-10 top-1/2 -translate-y-1/2 text-center content-center
   opacity-0 group-hover:opacity-70 transition-all duration-300 translate-x-[20%] group-hover:translate-x-0 hover:border-[#000]
    "
        onClick={handlePrev}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-[#fff] text-[18px]"
        />
      </div>
      <div
        className="prev-arrow hidden md:inline-block right-[50px] m-[5px] cursor-pointer hover:bg-[#000] hover:opacity-100 select-none bg-transparent
    h-[36px] w-[36px] border-solid border-[2px] border-[#fff] rounded-full absolute z-10 top-1/2 -translate-y-1/2 text-center content-center
    opacity-0 group-hover:opacity-70 transition-all duration-300 -translate-x-[20%] group-hover:translate-x-0 hover:border-[#000] "
        onClick={handleNext}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[#fff] text-[18px]"
        />
      </div>
    </div>
  );
};
