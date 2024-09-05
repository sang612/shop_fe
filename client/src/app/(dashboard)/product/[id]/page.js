import { ProductImageSlider } from "../../../../components/ProductImageSlider";
import { SimilarProducts } from "../../../../components/SimilarProducts";
import { DescriptionAndFeedback } from "../../../../components/DescriptionAndFeedback";

export default function Product() {
  return (
    <div>
      <p></p>
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="w-full flex flex-row justify-between flex-wrap">
          <div className="md:max-w-[58.3%] md:flex-[58.3%] relative m-0 p-[0_15px_30px] w-full">
            <ProductImageSlider />
          </div>
          <div className="md:max-w-[41.67%] md:flex-[41.67%] relative m-0 p-[0_15px_30px] w-full">
            <div>
              <div className="text-[.8em] ">
                <nav className="text-[#222] font-bold p-0 leading-[1.2] uppercase block">
                  <a
                    href="#"
                    className="ml-0 text-[rgba(102,102,102,0.7)] font-normal hover:text-[#111]"
                  >
                    WATER RESISTANT
                  </a>
                  <span className="relative top-0 opacity-35 m-[0_.3em] font-[300]">
                    /
                  </span>
                  <a
                    href="#"
                    className="ml-0 text-[rgba(102,102,102,0.7)] font-normal hover:text-[#111]"
                  >
                    Sport Watches
                  </a>
                </nav>
              </div>
              <p className="mb-[1.3em]"></p>
              <div>
                <h1 className="font-bold text-[#000]">
                  ROLEX GMT MASTER II ref 16710
                </h1>
                <div className="h-[3px] bg-[rgba(0,0,0,0.1)] m-[1em_0_1em] w-full max-w-[30px]"></div>
              </div>
              <div className="">
                <p className="block leading-[1]">
                  <span className="whitespace-nowrap text-[#111] font-bold">
                    <bdi>
                      10,000&nbsp;
                      <span>$</span>
                    </bdi>
                  </span>
                </p>
              </div>
              <div>
                <div>
                  <p>
                    <em>
                      ĐƯỢC THIẾT KẾ ĐỂ HIỂN THỊ THỜI GIAN THEO HAI MÚI GIỜ CÙNG
                      MỘT LÚC, MẪU ĐỒNG HỒ GMT-MASTER, RA MẮT VÀO NĂM 1955, BAN
                      ĐẦU ĐƯỢC PHÁT TRIỂN NHƯ MỘT DỤNG CỤ ĐIỀU HƯỚNG DÀNH CHO
                      CÁC CHUYÊN GIA TRÊN KHẮP THẾ GIỚI.
                    </em>
                  </p>
                  <p>
                    <em>
                      Đã 65 năm kể từ khi Rolex ra mắt chiếc GMT-Master đầu tiên
                      và trong thời gian đó, đã có rất nhiều biến thể tuyệt vời
                      nếu bạn tính đến tất cả các ví dụ về bộ đá quý và các mẫu
                      dây đeo khác nhau. Chiếc đồng hồ được giới thiệu ở đấy có
                      mã tham chiếu là 16700, cũng là dòng GMT-Master cuối cùng
                      được sản xuất, trước khi Rolex khai tử và chỉ sản xuất
                      GMT-master II cho những dòng đồng hồ GMT niềng màu sau
                      này.
                    </em>
                  </p>
                  <p>
                    Như một chiếc đồng hồ mang tính biểu tượng ở thời điểm hiện
                    tại, không thể nhầm lẫn vào đâu được với phần bezel màu xanh
                    và đỏ “Pepsi” của một GMT-Master. Một phần cốt lõi của danh
                    mục các dòng Rolex kể từ năm 1955, tự hào bây giờ cũng là
                    phần cốt lõi của nhiều bộ sưu tập đồng hồ của các hãng trên
                    thế giới. Cùng với Rolex Submariner và Datejust, GMT-master
                    là dòng được nhiều hãng đồng hồ homage làm phỏng theo hoặc
                    lấy cảm hứng trực tiếp nhất trong các dòng đồng hồ Thuy Sĩ.
                  </p>
                  <p>
                    <em>
                      Một khía cạnh hấp dẫn của GMT-Master là ngay cả sau khi ra
                      mắt thành công GMT-Master II vào năm 1982, GMT-Master vẫn
                      tiếp tục và các tham chiếu mới của GMT-Master, như chiếc
                      này, đã được thêm vào bộ sưu tập như những lựa chọn hợp lý
                      hơn. Chiếc đồng hồ này đã thay thế chiếc GMT-Master ref
                      trước đó. 16750.
                    </em>
                  </p>
                </div>
              </div>
              <a
                href="#"
                target="_blank"
                className="button !bg-[#000] w-full px-0 no-underline mb-[1em] "
              >
                <span className="leading-[1.6] normal-case">Mua Ngay</span>
              </a>
              <div>
                <p className="text-[#7a9c59]">1 in stock</p>
                <form action="" className="mb-[1.3em]">
                  <button
                    type="submit"
                    name="add-to-cart"
                    className="!bg-[#000] mr-0 text-[1em] text-[#fff]"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <DescriptionAndFeedback />
        <SimilarProducts />
      </div>
    </div>
  );
}
