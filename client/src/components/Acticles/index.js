import { Container } from "./Container";

export const Acticles = () => {
  return (
    <section className="py-[30px]">
      <div className="w-full flex flex-row flex-wrap max-w-[1080px] mx-auto">
        <div className="max-w-full basis-full relative m-0 p-[0_15px_30px] w-full">
          <div className="mx-auto text-center relative">
            <hr className="my-[15px] mx-0 border-t border-solid border-current opacity-10" />
            <h3 className="text-center text-[#000] font-bold">
              <a href="#" className="">
                ACTICLES
              </a>
            </h3>
            <p className="text-center mt-0 mb-[1.3em]">
              Vài chia sẻ thú vị của chúng mình về Đồng hồ Cổ điển
            </p>
            <Container />
          </div>
        </div>
      </div>
    </section>
  );
};
