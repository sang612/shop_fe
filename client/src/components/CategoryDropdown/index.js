"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const CategoryDropdown = ({ name, subList }) => {
  const [isCollapsed, setIsCollapsed] = useState(
    name == "Brand" ? false : true
  );

  return (
    <ul className="m-0 p-0">
      <li className="flex flex-row flex-wrap items-center m-0 text-left">
        <a
          href="/category/brand"
          className="text-[#000] font-extrabold inline-block py-[6px] px-0 flex-1"
        >
          {name}
        </a>
        <button
          className="w-[1em] min-h-[1em] m-0 ml-[5px] outline-none h-auto leading-[1] p-0 opacity-60"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-[12px] align-middle h-[12px] my-auto ml-[.2em] opacity-80 font-bold
            transition-all duration-300 ${
              isCollapsed ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
        <ul
          className={` border-l border-solid border-[#ddd] m-[0_0_10px_3px] pl-[15px] w-full ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          {subList?.map((item, i) => {
            return (
              <li className="p-0 m-0" key={i}>
                <a
                  href={item.url}
                  className="text-[.9em] p-[3px_0] inline-block "
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
