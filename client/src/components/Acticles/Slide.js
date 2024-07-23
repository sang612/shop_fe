export const Slide = ({ title, date, url, link }) => {
  return (
    <div className="p-[0_9.8px_19.6px] mb-0 w-auto relative group/item">
      <div className="transition-all duration-300 my-0 mx-auto shadow-[0_1px_3px_-2px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]">
        <a href={link} className="text-current">
          <div className="bg-[#fff] w-full relative mx-auto my-0">
            <div className="relative h-auto overflow-hidden mx-auto my-0">
              <img
                src={url}
                alt=""
                className="object-cover object-[50%_50%] inline-block w-full"
              />
            </div>
            <div className="px-[10px] text-center pt-[.7em] pb-[1.4em] relative w-full text-[.9em]">
              <h5 className="leading-[1.3] my-[.1em] text-[1.3em] uppercase tracking-[.05em] text-[#000] line-clamp-1">
                {title}
              </h5>
              <div className="opacity-80 text-[.8em]">{date}</div>
              <div className="my-[.5em] h-[2px] mx-auto bg-[rgba(0,0,0,0.1)] w-full max-w-[30px]"></div>
              <button
                className="mx-0 mt-[1em] text-[.8em] bg-transparent border-transparent px-[.15em] mb-0 text-[#666] 
              before:content-[''] before:h-[2px] before:bg-current before:opacity-30 before:transition-all before:duration-300 
              before:absolute before:bottom-0 before:left-[20%] before:w-[60%] hover:before:left-0 hover:before:w-full hover:before:opacity-100"
              >
                ĐỌC TIẾP
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
