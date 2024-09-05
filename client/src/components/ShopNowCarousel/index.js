"use client";

import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ProductSlide } from "../ProductSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const slideItem = [
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/05/ref-1106-1418-4-320x400.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/05/ref-1106-1418-3-300x375.jpg",
    model: "BLANCPAIN VILLERET ULTRA-SLIM POWER RESERVE ref 1106-1418",
    price: "6300",
    key: 1,
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/04/ref-PAM372-10-300x375.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/04/ref-PAM372-9-300x375.jpg",
    model: "PANERAI LUMINOR 1950 3 DAYS POWER RESERVED ref PAM00372",
    price: "5500",
    key: 2,
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/04/ref-Q2708411-2-768x960.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/04/ref-Q2708411-10-300x375.jpg",
    model: "JAEGER-LECOULTRE REVERSO GRANDE TAILE ref Q2708411",
    price: "5400",
    key: 3,
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/07/ref-78093-1-320x400.jpg",
    url2: "	https://donghocodien.com/wp-content/uploads/2024/07/ref-78093-2-300x375.jpg",
    model: "CARTIER TANK NORMALE ref 78093",
    price: "5320",
    key: 4,
  },
];

export const ShopNowCarousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      injectStyles: [
        `
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          text-align: center;
          line-height: 12px;
          font-size: 12px;
          color: #fff;
          opacity: 0.4;
          background: #fff;
        }

        .swiper-pagination-bullet-active {
          color: #fff;
          background: #fff;
          opacity: 1;
        }
        `,
      ],
      pagination: {
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
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
    <div className="max-w-[1065px] w-full relative group">
      <swiper-container ref={swiperElRef} speed="500" init="false" loop="true">
        {slideItem.map((item) => {
          return (
            // <div key={item.key}>
            <swiper-slide key={item.key}>
              <ProductSlide
                key={2}
                url={item.url}
                url2={item.url2}
                price={item.price}
                model={item.model}
              />
            </swiper-slide>
            // </div>
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
