"use client";

import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/image-slider.css";

export const ImagePagination = ({ slideItem }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
      },
    };

    Object.assign(swiperElRef.current, params);

    // initialize swiper
    swiperElRef.current.initialize();
  }, []);

  const handlePrev = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full relative group hover:cursor-grab">
      <swiper-container
        init="false"
        ref={swiperElRef}
        class="mySwiper2"
        space-between="20"
        watch-slides-progress="true"
        pagination="false"
      >
        {slideItem.map((item) => {
          return (
            <swiper-slide key={item.key} className="group/item">
              <img
                src={item.image}
                className="transition-all duration-300 hover:translate-y-[-5px] translate-y-0"
              />
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
