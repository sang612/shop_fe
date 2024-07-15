export const Slide = ({ model, price, url, url2 }) => {
  return (
    <div className="p-[0_9.8px_19.6px] mb-0 w-auto relative group/item">
      <div className="transition-all duration-300 my-0 mx-auto">
        <div className="relative h-auto mx-auto my-0 overflow-hidden transition-all duration-300">
          <a href="#" className="block">
            <img
              src={url}
              alt=""
              className="max-h-[375px] max-w-full w-full mx-auto my-0 "
            />
            <img
              src={url2}
              alt=""
              className="max-h-[375px] max-w-full w-full mx-auto my-0 absolute top-0 left-0 group-hover/item:opacity-100 opacity-0 transition-all duration-500"
            />
          </a>
        </div>
        <div className="pt-[.7em] pb-[1.4em] relative w-full text-[.9em] transition-all duration-300">
          <p className="my-[.1em]">
            <a
              href="#"
              className="leading-[1.3] my-[.1em] inline-block text-[#000]"
            >
              {model}
            </a>
          </p>
          <span className="block leading-[1]">
            <span className="whitespace-nowrap text-[#111] font-bold">
              <span>{price} </span>
              <span>$</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
