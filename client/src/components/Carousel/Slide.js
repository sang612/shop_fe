export const Slide = ({
  content,
  url,
  bg = "https://donghocodien.com/wp-content/uploads/2022/03/ref-3940J-4.jpg",
}) => {
  return (
    <div className="md:h-screen h-[75vh] w-auto relative">
      <div
        className={`absolute top-0 left-0 m-0 p-0 w-full h-full
      bg-[39%_47%] transition-all duration-700 bg-no-repeat bg-cover
     
       `}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="px-0 h-full relative min-w-full w-full">
        <div className="md:w-[41%] w-[80%] text-[16px] md:bottom-[20%] bottom-[10%] md:left-[10%] md:translate-x-0 left-1/2 -translate-x-1/2 absolute ">
          <div className="bg-[rgba(0,0,0,0.37)] text-[#f1f1f1] relative text-center overflow-auto">
            <p className="p-0 my-[1em] text-center">{content}</p>
            <a
              href={url}
              className="my-[.5em] text-[#fff] bg-transparent border-transparent px-[.15em] text-[1.15em] 
              before:content=[''] before:h-[2px] before:bg-current before:opacity-30 before:transition-all before:duration-300
               before:absolute before:bottom-0 before:left-[20%] before:w-[60%] text-center inline-block mx-0 relative font-bold"
            >
              <span className="inline-block leading-[1.6] text-[#fff]">
                Tìm Hiểu Thêm
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
