"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const toggleSubNav = () => {
    setIsOpenSub(!isOpenSub);
  };

  return (
    <div>
      <div className="h-auto w-full fixed top-0 left-0 z-[60]">
        <div className="h-full w-full">
          <div className="h-[90px]">
            <div className="h-full flex flex-row flex-nowrap items-center justify-between w-full p-[15px] mx-auto bg-transparent">
              <div
                id="logo"
                className="w-[300px] order-2 text-center my-0 md:mx-[30px] mx-auto leading-[1] max-h-full"
              >
                <a href="" title="Spacetime - Vintage Watch" rel="home">
                  <img
                    width="300"
                    height="100"
                    src="https://donghocodien.com/wp-content/uploads/2023/06/Artboard-2@10x-8.png"
                    alt="Spacetime"
                    className="max-h-[90px] transition-[max-height] duration-500 block mx-0 my-auto w-auto hidden"
                  ></img>
                  <img
                    width="300"
                    height="100"
                    src="https://donghocodien.com/wp-content/uploads/2023/06/Artboard-1@10x-8.png"
                    alt="Spacetime"
                    className="max-h-[90px] transition-[max-height] duration-500 block mx-0 my-auto w-auto"
                  ></img>
                </a>
              </div>
              <div className="order-1 flex-1 mr-auto max-h-full hidden md:block">
                <ul className="justify-start w-full relative flex flex-row flex-wrap items-center m-0 p-0 list-disc">
                  <li className="text-white font-[.85rem] first:ml-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
                    <div className="text-white font-[.85rem]">13:48:33</div>
                  </li>
                  <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
                    <div className="text-white font-[1rem] inline-block align-middle">
                      <a
                        href="https://www.instagram.com/spacetime.vintagewatch/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        data-label="Instagram"
                        className="mx-[.3em] font-[1.2em] transition-all duration-300 no-underline touch-manipulation bg-transparent"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-[1.2em]"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 flex-1 mr-auto max-h-full block md:hidden min-w-[60px]">
                <ul className="justify-start w-full relative flex flex-row flex-nowrap items-center m-0 p-0 list-disc">
                  <li className="text-white font-[.85rem] first:ml-0 my-0 md:mx-[11px] mx-[7px] inline-block list-none p-0 relative transition-colors duration-300">
                    <div
                      className="text-white font-[1rem] inline-block align-middle"
                      onClick={toggleNav}
                    >
                      <FontAwesomeIcon icon={faBars} className="text-[1.2em]" />
                    </div>
                  </li>
                  <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 md:mx-[11px] mx-[7px] inline-block list-none p-0 relative transition-colors duration-300">
                    <div className="text-white font-[1rem] inline-block align-middle">
                      <a
                        href="https://www.instagram.com/spacetime.vintagewatch/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        data-label="Instagram"
                        className="mx-[.3em] font-[1.2em] transition-all duration-300 no-underline touch-manipulation bg-transparent"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-[1.2em]"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-3 flex-1 ml-auto max-h-full">
                <ul className="justify-end w-full relative flex flex-row md:flex-wrap flex-nowrap items-center m-0 p-0 list-disc">
                  <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 mx-[11px] hidden md:inline-block list-none p-0 relative transition-colors duration-300">
                    <div className="flex flex-row items-center gap-x-[8px]">
                      <a
                        href="https://donghocodien.com"
                        className="text-white no-underline touch-manipulation bg-transparent"
                      >
                        VI
                      </a>
                      <span>|</span>
                      <a
                        href="https://spacetimevintagewatch.com/"
                        className="text-white no-underline touch-manipulation bg-transparent"
                      >
                        EN
                      </a>
                    </div>
                  </li>
                  <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 md:mx-[11px] mr-0 ml-[11px] inline-block list-none p-0 relative transition-colors duration-300">
                    <a href="">
                      <span className="inline-block align-middle relative h-auto group">
                        <strong
                          className="border-white rounded-none font-bold mx-0 my-[.3em] border-[2px] border-solid relative inline-flex items-center justify-center text-center w-[28.15px] h-[28.15px] text-[12.8px] leading-[28.15px]
                    after:border-white after:transition-[height] after:duration-100 after:ease-out after:bottom-full after:mb-0 after:ml-[-7px] after:h-[8px] after:w-[14px] after:left-1/2 after:content-[' '] after:absolute after:pointer-events-none after:border-[2px] after:border-solid after:rounded-tl-[99px] after:rounded-tr-[99px] after:rounded-b-none
                    group-hover:after:h-[10px]"
                        >
                          0
                        </strong>
                      </span>
                      <div id="card-popup" className="hidden"></div>
                    </a>
                  </li>
                  <li className="z-[30] group text-white font-[.85rem] first:ml-0 last:mr-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-[1.2em]"
                      />
                    </a>

                    <ul
                      className="nav-dropdown z-10 absolute left-auto right-[5px] mt-2 bg-white text-[#777] border-[2px] border-solid border-[#ddd] shadow-[1px_1px_15px_rgba(0,0,0,0.15)]
                  p-[20px] min-w-[260px] text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <li>
                        <div className="searchform-wrapper ux-search-box relative is-normal">
                          <form
                            role="search"
                            method="get"
                            className="searchform"
                            action="https://donghocodien.com/"
                          >
                            <div className="flex flex-row  relative h-full flex-nowrap items-center justify-between w-full">
                              <div className="flex flex-col flex-1 ">
                                <input
                                  type="text"
                                  placeholder="Tìm kiếm..."
                                  className="appearance-none border-[1px] border-solid border-[#ddd] py-0 px-[.75em] 
                                rounded-none max-w-full w-full align-middle bg-white text-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]
                                transition-all duration-300 h-[39px] outline-0"
                                />
                              </div>
                              <div className="max-h-full">
                                <button className="bg-black m-0 rounded-none min-w-[2.5em] px-[.6em] inline-block mb-0">
                                  <FontAwesomeIcon
                                    icon={faSearch}
                                    color="#fff"
                                    className="text-[1.2em]"
                                  />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-bottom min-h-[55px] relative items-center z-10 md:flex hidden bg-transparent">
            <div className="h-full flex flex-row flex-nowrap items-center justify-between w-full px-[15px] mx-auto">
              <div className="my-0 mx-auto ">
                <ul className="justify-center w-full relative flex flex-row flex-wrap items-center m-0 p-0">
                  <li
                    className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300
                before:border-b-white before:border-[9px] before:ml-[-11px] before:bottom-[0px] before:overflow-hidden before:z-0 hover:before:left-1/2 before:border-solid before:border-transparent 
                before:content-[''] before:h-0 before:w-0 before:absolute before:pointer-events-none group before:opacity-0 hover:before:opacity-100 before:transition-opacity
                before:duration-300 before:left-[-9999px]"
                  >
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      Watches
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-[10px] align-middle h-[12px] my-auto ml-[.2em] opacity-80 font-bold"
                      />
                    </a>
                    <ul
                      className="bg-white border-white border-[2px] border-solid shadow-[1px_1px_15px_rgba(0,0,0,0.15)] p-[20px] 
                  absolute min-w-[260px] z-[9] opacity-0 m-0 transition-opacity duration-300 text-left  group-hover:opacity-100
                  left-[-9999px] group-hover:left-0 table"
                    >
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="border-r border-solid border-transparent first:ml-0 table-cell text-left whitespace-nowrap w-[160px] min-w-[160px]
                    m-0 align-top"
                      >
                        <a
                          href=""
                          className="px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] uppercase text-[.8em] font-bold text-black
                      transition-all duration-200 w-auto py-[10px]"
                        >
                          market segment
                        </a>
                        <ul className="m-0 p-0">
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Rare & Collectible
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Super Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Premium
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="group first:ml-0 block m-0 align-top whitespace-nowrap">
                            <a
                              href=""
                              className="group-last:border-b-0 px-0 mx-[10px] my-0 border-b border-solid border-[#ececec] block text-[rgba(102,102,102,0.85)]
                          transition-all duration-200 w-auto py-[10px] leading-[1.3] hover:text-[rgba(17,17,17,0.85)]"
                            >
                              Affordable
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      swatch
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      consignment
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      articles
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      contact
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      about us
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      archives
                    </a>
                  </li>
                  <li className="first:ml-0 my-0 mx-[13px] inline-block list-none p-0 relative transition-[background-color] duration-300">
                    <a
                      href=""
                      className="tracking-[2px] text-[rgba(255,255,255,0.8)] font-[700] leading-[16px] text-[.8em] uppercase
                  transition-all duration-200 py-[10px] px-0 inline-flex hover:text-white"
                    >
                      consign your watch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header>
          {/* <nav
          className="relative flex w-full items-center justify-between bg-black py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
          data-twe-navbar-ref>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              <button
                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContentX"
                aria-controls="navbarSupportedContentX"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span
                  className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
              id="navbarSupportedContentX"
              data-twe-collapse-item>
              <ul
                className="me-auto flex flex-col lg:flex-row"
                data-twe-navbar-nav-ref>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >Home</a
                  >
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >Features</a
                  >
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >Pricing</a
                  >
                </li>
                <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >About</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

          {/* <div className="relative h-[350px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-[50%] bg-no-repeat">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                  <h1 className="mb-6 text-5xl font-bold">The Time</h1>
                  <h3 className="mb-8 text-3xl font-bold">Vintage Watch</h3>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Show now
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </header>
      </div>
      {/* <div className="absolute top-0 h-screen left-0 w-full z-[1043]"> */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0b0b0b] opacity-75 z-[60] md:hidden"
          onClick={toggleNav}
        ></div>
      )}
      <div
        className={` fixed top-0 bottom-0 w-[260px] bg-[rgba(255,255,255,0.95)] left-0
        overflow-x-hidden overflow-y-auto transition-all duration-200 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-[1043] md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="py-[30px] px-0 ">
          <ul className="flex flex-col flex-nowrap w-full items-center p-0 m-0">
            <li className="p-[20px] text-[.85em] m-0 w-full first:ml-0 block">
              <div className="searchform-wrapper ux-search-box relative is-normal">
                <form
                  role="search"
                  method="get"
                  className="searchform"
                  action="https://donghocodien.com/"
                >
                  <div className="flex flex-row  relative h-full flex-nowrap items-center justify-between w-full">
                    <div className="flex flex-col flex-1 ">
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="appearance-none border-[1px] border-solid border-[#ddd] py-0 px-[.75em] 
                                rounded-none max-w-full w-full align-middle bg-white text-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]
                                transition-all duration-300 h-[39px] outline-0"
                      />
                    </div>
                    <div className="max-h-full">
                      <button className="bg-orange-950 m-0 rounded-none min-w-[2.5em] px-[.6em] inline-block mb-0">
                        <FontAwesomeIcon
                          icon={faSearch}
                          color="#fff"
                          className="text-[1.2em]"
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li
              className={`border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300 ${
                isOpenSub ? "bg-[rgba(0,0,0,0.05)]" : ""
              }`}
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                watches
              </a>
              <button
                className={`mb-0 h-auto w-[45px] leading-[1] shadow-none p-0 text-current opacity-60 m-0 mr-[5px] transition-all duration-300
                  ${isOpenSub && "rotate-180"}`}
                onClick={toggleSubNav}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <ul
                className={`pb-[30px] block m-0 p-0 [transition:background-color_0.6s,opacity_0.3s,transform_0.3s] ${
                  isOpenSub
                    ? "translate-x-0 opacity-100 left-auto"
                    : "fixed opacity-0 left-[-9999px] translate-x-[-10px]"
                }`}
              >
                <li className="mb-[1em] list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em] ">
                  <a
                    href=""
                    className="pl-[20px] py-[5px] text-[#000] uppercase text-[.8em] font-bold transition-colors duration-200"
                  >
                    market segment
                  </a>
                  <ul className="m-0 p-0 w-full">
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Rare & Collectible
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Super Premium
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Premium
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Fashion
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Affordable
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mb-[1em] list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em] ">
                  <a
                    href=""
                    className="pl-[20px] py-[5px] text-[#000] uppercase text-[.8em] font-bold transition-colors duration-200"
                  >
                    gender
                  </a>
                  <ul className="m-0 p-0 w-full">
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Unisex
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Male
                      </a>
                    </li>
                    <li className="list-none m-0 w-full first:ml-0 text-[1em] pl-[.5em]">
                      <a
                        href=""
                        className="block pl-[20px] py-[5px] transition-colors duration-200 text-[#666]"
                      >
                        Female
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                SWATCH
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                consignment
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                articles
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                contact
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                about us
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                archives
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                consign your watch
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <a
                href=""
                className="pl-[20px] py-[15px] font-bold text-[.8em] flex items-center w-auto flex-grow tracking-[0.2em]
                uppercase transition-all duration-200 text-[rgba(102,102,102,0.85)]"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[1.6em] opacity-70"
                />
              </a>
            </li>
            <li
              className="border-t border-solid border-[#ececec] list-none m-0 w-full flex flex-row flex-wrap items-center
              transition-[background-color] duration-300"
            >
              <div className="flex items-center gap-x-[8px] pl-[20px] py-[15px]">
                <a href="" className="text-[#000] no-underline">
                  VI
                </a>
                <span>|</span>
                <a href="" className="text-[#000] no-underline">
                  EN
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
