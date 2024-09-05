"use client";

import { useCallback, useState } from "react";
import { CategoryDropdown } from "../../../components/CategoryDropdown";
import { RangeSlider } from "../../../components/RangeSlider";
import { ProductSlide } from "../../../components/ProductSlide";

const categories = [
  {
    id: "ass22",
    name: "Brand",
    subList: [
      { name: "ALange & Sohne", url: "/category/brand/alange-sohne" },
      { name: "Alpha", url: "/category/brand/alpha" },
      { name: "Angelus", url: "/category/brand/angelus" },
    ],
  },
  {
    id: "ass23",
    name: "Gender",
    subList: [
      { name: "Female", url: "/category/gender/female" },
      { name: "Male", url: "/category/gender/male" },
      { name: "Unisex", url: "/category/gender/unisex" },
    ],
  },
];
const products = [
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/05/ref-1106-1418-4-320x400.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/05/ref-1106-1418-3-300x375.jpg",
    model: "BLANCPAIN VILLERET ULTRA-SLIM POWER RESERVE ref 1106-1418",
    price: "6300",
    id: "aaa11",
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/04/ref-PAM372-10-300x375.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/04/ref-PAM372-9-300x375.jpg",
    model: "PANERAI LUMINOR 1950 3 DAYS POWER RESERVED ref PAM00372",
    price: "5500",
    id: "aaa12",
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/04/ref-Q2708411-2-768x960.jpg",
    url2: "https://donghocodien.com/wp-content/uploads/2024/04/ref-Q2708411-10-300x375.jpg",
    model: "JAEGER-LECOULTRE REVERSO GRANDE TAILE ref Q2708411",
    price: "5400",
    id: "aaa13",
  },
  {
    url: "https://donghocodien.com/wp-content/uploads/2024/07/ref-78093-1-320x400.jpg",
    url2: "	https://donghocodien.com/wp-content/uploads/2024/07/ref-78093-2-300x375.jpg",
    model: "CARTIER TANK NORMALE ref 78093",
    price: "5320",
    id: "aaa14",
  },
];

export default function Product() {
  const [sliderValue, setSliderValue] = useState(100);
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 10000 });

  // const handleRangeChange = ({ min, max }) => {
  //   setRangeValues({ min, max });
  // };
  const handleRangeChange = useCallback(
    ({ min, max }) => {
      // Only update state if the values actually change to avoid unnecessary re-renders
      if (min !== rangeValues.min || max !== rangeValues.max) {
        setRangeValues({ min, max });
      }
    },
    [rangeValues.min, rangeValues.max]
  );

  return (
    <div>
      <div className="w-full max-w-[1080px] mx-auto pt-[30px] flex flex-wrap flex-row">
        <div
          id="col-category"
          className="max-w-[25%] basis-1/4 relative m-0 p-[0_15px_30px] w-full"
        >
          <div className="mx-0">
            <aside className="mb-[1.5em] block">
              <span className="text-[1em] font-semibold leading-[1.05] tracking-[.05em] uppercase">
                Category
              </span>
              <div className="mt-[.66em] h-[3px] bg-[rgba(0,0,0,0.1)] m-[1em_0_1em] w-full max-w-[30px]"></div>
              {categories.map((item) => {
                return (
                  <CategoryDropdown
                    name={item.name}
                    subList={item.subList}
                    key={item.id}
                  />
                );
              })}
            </aside>

            <aside className="mb-[1.5em] block">
              <span className="text-[1em] font-semibold leading-[1.05] tracking-[.05em] uppercase">
                PRICE
              </span>
              <div className="mt-[.66em] h-[3px] bg-[rgba(0,0,0,0.1)] m-[1em_0_1em] w-full max-w-[30px]"></div>
              <div className="m-0">
                <RangeSlider
                  min={0}
                  max={10000}
                  onChange={handleRangeChange}
                  hiddenValue
                />
                <div className="pt-[20px] text-center leading-[1] text-[.8751em]">
                  Price:&nbsp; &nbsp;
                  <span id="from" className="font-bold">
                    {rangeValues.min.toLocaleString("en-US")}$
                  </span>
                  <span className="font-bold"> — </span>
                  <span id="to" className="font-bold">
                    {rangeValues.max.toLocaleString("en-US")}$
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div
          id="col-prudct"
          className="max-w-[75%] basis-3/4 relative m-0 p-[0_15px_30px] w-full"
        >
          <div className="mx-[-10px] mb-0 px-0 w-auto max-w-[1065px] flex flex-row flex-wrap">
            {products.map((item) => {
              return (
                <div className="max-w-1/3 w-1/3 box-border" key={item.id}>
                  <ProductSlide
                    url={item.url}
                    url2={item.url2}
                    price={item.price}
                    model={item.model}
                    showButton
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
