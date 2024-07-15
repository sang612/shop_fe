"use client";

import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Slide } from "./Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Carousel = () => {
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
    // <div>
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <img className="rounded-t-lg" src="./1.png" alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="z-[50] md:h-screen h-[75vh] w-full relative group">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        speed="500"
        init="false"
        loop="true"
      >
        <swiper-slide>
          <Slide
            content={`Patek Philippe luôn là huyền thoại của ngành đông hồ?`}
            url={`#`}
            bg={`https://donghocodien.com/wp-content/uploads/2022/03/ref-3940J-4.jpg`}
          />
        </swiper-slide>
        <swiper-slide>
          <Slide
            content={`Rolex cổ điển vẫn luôn mang sự thu hút riêng, liệu bạn có hứng thú?`}
            url={`#`}
            bg={`https://donghocodien.com/wp-content/uploads/2023/05/ref-1601-2-1.jpg`}
          />
        </swiper-slide>
        <swiper-slide>
          <Slide
            content={`Nơi bạn có thể tìm thấy những chiếc đồng hồ Omega cổ điển đầy uy tín`}
            url={`#`}
            bg={`https://donghocodien.com/wp-content/uploads/2023/07/ref-311.30.40.30.01.001-5.jpg`}
          />
        </swiper-slide>
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
