import { ShopNowCarousel } from "../ShopNowCarousel";

export const ShopNow = () => {
  return (
    <section className="py-[30px]">
      <div className="w-full flex flex-row flex-wrap max-w-[1080px] mx-auto">
        <div className="max-w-full basis-full relative m-0 p-[0_15px_30px] w-full">
          <div className="mx-auto text-center relative">
            <hr className="my-[15px] mx-0 border-t border-solid border-current opacity-10" />
            <h3 className="text-center text-[#000] font-bold">
              <a href="#" className="">
                SHOP NOW
              </a>
            </h3>
            <p className="text-center mt-0 mb-[1.3em]">
              Hãy ghé thăm cửa hàng của chúng mình nhé
            </p>
            <ShopNowCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
