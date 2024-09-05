"use client";

import { useCallback, useState } from "react";
import { Button } from "../../../components/Button";

const articles = [
  {
    id: "articles1",
    title: "ĐỒNG HỒ CỔ ĐIỂN",
    articlesCategory: "Knowledge",
    date: "JULY 1, 2020",
    creator: "SPACETIME",
    subTitle:
      "SPACETIME – SỨ MỆNH MANG ĐẾN SỰ TINH TẾ TRÊN HÀNG TRIỆU CỔ TAY VIỆT",
    images:
      "https://donghocodien.com/wp-content/uploads/2021/12/ref-6-44-6-1400x788.jpg",
    content:
      "Đồng hồ Vintage từ lâu đã tạo được những dấu ấn sâu sắc về các cột mốc thời gian lên đến hàng chục năm hay thậm chí trăm năm góp phần gợi nhớ những hoài niệm xưa cổ từ những thập niên trước. Được sinh ra với sứ mệnh mang đến sự tinh tế trên cổ tay của khách hàng, Spacetime đại diện cho hai khoảnh khắc mà mỗi chúng ta đều trân quý đó là 'Now and Here', mỗi khi nhìn một giây trôi qua chúng ta lại nhắc nhớ bản thân sống trọn từng khoảnh khắc hiện tại dù là khoảng thời gian nào, hay ở bất kỳ nơi đâu.\n\nDu ngoạn khắp nơi, khám phá thế giới đa sắc màu, thể hiện phong cách bản thân dù ở nơi đâu, làm gì Spacetime vẫn luôn có mặt trong từng khoảnh khắc của bạn…ở đây và ngay trên cổ tay.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "articles2",
    title: "KHÁM PHÁ PHONG CÁCH VINTAGE ĐẦY CÁ TÍNH CÙNG SPACETIME",
    articlesCategory: "Lifestyle",
    date: "AUGUST 15, 2020",
    creator: "SPACETIME",
    images:
      "https://donghocodien.com/wp-content/uploads/2021/11/Jaeger-LeCoultre-Reverso-History-A-Collected-Man-London-11_e03e7d37-29cb-43cd-a7e3-2f1c5e067d49_1728x-768x891.jpg",
    content:
      "Phong cách Vintage không chỉ là xu hướng thời trang mà còn là cách sống, mang lại sự độc đáo và đậm chất cá nhân cho mỗi người. Spacetime kết hợp giữa những đường nét cổ điển và công nghệ hiện đại, tạo nên những chiếc đồng hồ vừa mang đậm dấu ấn thời gian, vừa phản ánh phong cách sống hiện đại. Bất kỳ ai cũng có thể cảm nhận được sự kết nối giữa quá khứ và hiện tại thông qua những sản phẩm của Spacetime.\n\nDù bạn đang ở đâu, làm gì, Spacetime sẽ luôn đồng hành cùng bạn trong hành trình khám phá phong cách cá nhân của mình.",
  },
  {
    id: "articles3",
    title: "SPACETIME – TIÊN PHONG TRONG CÔNG NGHỆ ĐỒNG HỒ THÔNG MINH",
    articlesCategory: "Innovation",
    date: "SEPTEMBER 5, 2020",
    creator: "SPACETIME",
    images:
      "https://donghocodien.com/wp-content/uploads/2021/11/co-gi-dac-biet-o-dong-ho-daytona-thiet-ke-ban-chay-nhat-cua-rolex-1629106588-1.png",
    content:
      "Spacetime không chỉ dừng lại ở những thiết kế đồng hồ cổ điển, mà còn luôn đổi mới để dẫn đầu trong công nghệ đồng hồ thông minh. Với các tính năng hiện đại như đo nhịp tim, theo dõi giấc ngủ, và kết nối với điện thoại thông minh, Spacetime mang đến trải nghiệm vượt trội cho người dùng. Mỗi sản phẩm là sự kết hợp hoàn hảo giữa thẩm mỹ cổ điển và tiện ích hiện đại, phù hợp cho cả những người yêu công nghệ và thời trang.\n\nHãy để Spacetime trở thành người bạn đồng hành đáng tin cậy trên mỗi bước đường của bạn, dù là trong công việc hay trong cuộc sống hàng ngày.",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return lastSpaceIndex !== -1
    ? truncated.slice(0, lastSpaceIndex) + " […]"
    : truncated + " […]";
};

export default function Articles() {
  return (
    <div>
      <div className="w-full max-w-[1080px] mx-auto pt-[30px] flex flex-wrap flex-row">
        <div className="p-[0_30px_30px] mb-0 max-w-[75%] flex-[75%]">
          {articles.map((articles) => {
            articles.content = truncateText(articles.content, 250);
            return (
              <article className="p-[0_0_30px]" key={articles.id}>
                <header className="">
                  <div className="px-[1.5em] pt-0 pb-[1.5em] text-center">
                    <h6 className="text-[.7em] ">
                      <a href="#" rel="category tag">
                        {articles.articlesCategory}
                      </a>
                    </h6>
                    <h2 className="entry-title">
                      <a href="#" rel="bookmark">
                        {articles.title}
                      </a>
                    </h2>
                    <div className="mx-auto h-[3px] bg-[rgba(0,0,0,0.1)] m-[1em_0_1em] w-full max-w-[30px]"></div>
                    <div className="mx-auto text-[.9em] uppercase leading-[1.2] tracking-[.05em]">
                      <span className="leading-[1.2] tracking-[.05em] text-[.9em]">
                        Đăng vào &nbsp;
                        <a href="#" rel="bookmark">
                          <time datetime="2020-07-01T13:18:36+07:00">
                            {articles.date}
                          </time>
                        </a>
                      </span>
                      &nbsp;
                      <span className="leading-[1.2] tracking-[.05em] text-[.9em]">
                        bởi&nbsp;
                        <span className="leading-[1.2] tracking-[.05em] text-[.9em]">
                          <a className="url fn n" href="#">
                            {articles.creator}
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <a href="#">
                      <img
                        src={articles.images}
                        alt=""
                        className="w-full align-middle inline-block h-auto max-w-full"
                      />
                    </a>
                  </div>
                </header>
                <div className="py-[1.5em]">
                  <p className="py-0 mb-0 whitespace-pre-wrap">
                    <span className="block">{articles.subTitle}</span>
                    {articles.content}
                  </p>
                  <div className="text-center">
                    <Button
                      isWhite
                      className="text-[.75em] mt-[1.5em] leading-[2.19em]"
                    >
                      Đọc tiếp <span class="inline-block leading-[1.6]">→</span>
                    </Button>
                  </div>
                </div>
                <footer className="border-t-2 border-solid border-[#ececec] p-[.5em_0_.6em]"></footer>
              </article>
            );
          })}
        </div>

        <div className="border-l border-solid border-[#cecece] p-[0_30px_30px] mb-0 max-w-[25%] flex-[25%]">
          <div>
            <aside className="mb-[1.5em] block">
              <span className="text-[1em] font-semibold leading-[1.05] tracking-[.05em] uppercase">
                LATEST ARTICLES
              </span>
              <div className="h-[3px] bg-[rgba(0,0,0,0.1)] mt-[.66em] mx-0 mb-[1em] w-full max-w-[30px]"></div>
              <ul className="m-0 box-border p-0">
                {articles.map((item) => {
                  const date = new Date(item.date);
                  const day = date.getDate();
                  const month = date.toLocaleString("en-US", {
                    month: "short",
                  });

                  return (
                    <li className="list-none text-left m-0 first:border-none border-t border-solid border-[#cecece]">
                      <div className="p-[10px_0_10px] flex flex-row flex-nowrap w-full align-top">
                        <div className="mr-[15px] max-h-full">
                          <div className="m-0 w-[2.3em] h-[2.3em] table pointer-events-none ">
                            <div
                              className="bg-transparent text-[#000] border-2 border-solid border-current leading-[.7] table-cell
                          align-middle text-center w-full h-full font-extrabold p-[2px] whitespace-nowrap"
                            >
                              <span className="leading-[.85] text-[16px]">
                                {day}
                              </span>
                              <br />
                              <span className="leading-[.85] text-[.7em]">
                                {month}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 max-h-full">
                          <a
                            href="#"
                            className="leading-[1.2] block mb-[6px] text-[#000]"
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
