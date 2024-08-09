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
import { ImagePagination } from "./ImagePagination";
import { ImageSlider } from "./ImageSlider";

const slideItem = [
  {
    key: 1,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-1-768x960.jpg",
  },
  {
    key: 1,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-3-768x960.jpg",
  },
  {
    key: 2,
    image:
      "	https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-2-768x960.jpg",
  },
  {
    key: 3,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-10-768x960.jpg",
  },
  {
    key: 4,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-9-768x960.jpg",
  },
  {
    key: 5,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-8-768x960.jpg",
  },
  {
    key: 6,
    image:
      "https://donghocodien.com/wp-content/uploads/2024/06/ref-SO35P100-2-6-768x960.jpg",
  },
];

export const ProductImageSlider = () => {
  return (
    <div className="w-full">
      <ImageSlider slideItem={slideItem} />
      <ImagePagination slideItem={slideItem} />
    </div>
  );
};
