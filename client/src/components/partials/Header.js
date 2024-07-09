import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="h-[90px] w-full">
      <div className="h-full w-full">
        <div className="h-[90px]">
          <div className="h-full flex flex-row flex-nowrap items-center justify-between w-full p-[15px] mx-auto bg-orange-950">
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
        <div
          className="relative h-[350px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-[50%] bg-no-repeat">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">The Time</h1>
                <h3 className="mb-8 text-3xl font-bold">Vintage Watch</h3>
                <button
                  type="button"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Show now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
