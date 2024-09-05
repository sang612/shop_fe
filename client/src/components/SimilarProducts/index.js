import { SimilarProductsCarousel } from "./SimilarProductsCarousel";

export const SimilarProducts = () => {
  return (
    <section className="py-[30px]">
      <div className="w-full flex flex-row flex-wrap max-w-[1080px] mx-auto">
        <div className="max-w-full basis-full relative m-0 p-[0_15px_30px] w-full">
          <div className="mx-auto text-center relative">
            <hr className=" mx-0 border-t border-solid border-current opacity-10" />
            <h3 className="text-left text-[#000] font-bold uppercase leading-[1.2] text-[1.25em] py-[15px]">
              <a href="#" className="">
                Similar Products
              </a>
            </h3>
            <SimilarProductsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
