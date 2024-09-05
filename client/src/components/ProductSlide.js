export const ProductSlide = ({
  model,
  price,
  url,
  url2,
  showButton = false,
}) => {
  return (
    <div className="p-[0_9.8px_19.6px] mb-0 w-auto relative group/item flex flex-col h-full">
      <div className="relative h-auto mx-auto my-0 overflow-hidden transition-all duration-300">
        <a href="#" className="block">
          <img
            src={url}
            alt=""
            className="max-h-[375px] max-w-full w-full mx-auto my-0"
          />
          <img
            src={url2}
            alt=""
            className="max-h-[375px] max-w-full w-full mx-auto my-0 absolute top-0 left-0 group-hover/item:opacity-100 opacity-0 transition-all duration-500"
          />
        </a>
      </div>
      <div className="flex flex-col justify-between pt-[.7em] pb-[1.4em] relative w-full text-[.9em] transition-all duration-300 flex-grow">
        <p className="my-[.1em]">
          <a
            href="#"
            className="leading-[1.3] my-[.1em] inline-block text-[#000]"
          >
            {model}
          </a>
        </p>
        <div className="flex flex-col mt-auto">
          <span className="whitespace-nowrap text-[#111] font-bold">
            <span>{price} </span>
            <span>$</span>
          </span>
          {showButton && (
            <div className="mt-[1em]">
              <button className="text-[#000] text-[.8em] border-2 border-solid bg-transparent border-current hover:bg-primaryTheme hover:text-white w-full">
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
