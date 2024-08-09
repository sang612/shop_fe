import { ProductImageSlider } from "../../../../components/ProductImageSlider";

export default function Product() {
  return (
    <div>
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="w-full">
          <div className="md:max-w-[58.3%] md:flex-[58.3%] relative m-0 p-[0_15px_30px] w-full">
            <ProductImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
