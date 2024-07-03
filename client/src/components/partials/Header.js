import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="h-[145px] w-full">
      <div className="h-full w-full">
        <div className="h-[90px]">
          <div className="h-full flex flex-row flex-nowrap items-center justify-between w-full max-w-[1080px] p-[15px] mx-auto bg-black">
            <div
              id="logo"
              className="w-[300px] order-2 text-center my-0 mx-[30px] leading-[1] max-h-full"
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
            <div className="order-1 flex-1 mr-auto max-h-full">
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
            <div className="order-3 flex-1 ml-auto max-h-full">
              <ul className="justify-end w-full relative flex flex-row flex-wrap items-center m-0 p-0 list-disc">
                <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
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
                <li className="text-white font-[.85rem] first:ml-0 last:mx-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
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
                <li className="group text-white font-[.85rem] first:ml-0 last:mr-0 my-0 mx-[11px] inline-block list-none p-0 relative transition-colors duration-300">
                  <a href="#">
                    <FontAwesomeIcon icon={faSearch} className="text-[1.2em]" />
                  </a>

                  <ul className="nav-dropdown absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg hidden group-hover:block">
                    <li className="p-4">
                      <div className="header-search-form-wrapper">
                        <div className="searchform-wrapper ux-search-box relative is-normal">
                          <form
                            role="search"
                            method="get"
                            className="searchform"
                            action="https://donghocodien.com/"
                          >
                            <div className="flex-row relative">
                              <div className="flex-col flex-grow">
                                <label
                                  className="screen-reader-text"
                                  htmlFor="woocommerce-product-search-field-0"
                                >
                                  Search for:
                                </label>
                                <input
                                  type="search"
                                  id="woocommerce-product-search-field-0"
                                  className="search-field mb-0 p-2 border border-gray-300 rounded"
                                  placeholder="Tìm kiếm…"
                                  defaultValue
                                  name="s"
                                  autoComplete="off"
                                />
                                <input
                                  type="hidden"
                                  name="post_type"
                                  defaultValue="product"
                                />
                                <input
                                  type="hidden"
                                  name="lang"
                                  defaultValue="vi"
                                />
                              </div>
                              <div className="flex-col">
                                <button
                                  type="submit"
                                  value="Search"
                                  className="ux-search-submit submit-button secondary button icon mb-0 p-2 bg-blue-500 text-white rounded ml-2"
                                  aria-label="Submit"
                                >
                                  <i className="fas fa-search" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
