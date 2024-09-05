import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const DescriptionAndFeedback = () => {
  return (
    <div>
      <TabGroup>
        <TabList className="flex justify-center">
          <Tab
            className="outline-none mx-[7px] w-auto p-0 font-bold text-[.8em] uppercase leading-[.02em] text-[rgba(102,102,102,0.85)] transition-all
        duration-200 py-[10px] before:opacity-0 before:bg-[#000] before:content-['']
        before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:transition-all before:duration-300
        before:h-[3px] data-[selected]:text-[rgba(17,17,17,0.85)] data-[selected]:before:opacity-100
         data-[hover]:text-[rgba(17,17,17,0.85)] data-[hover]:before:opacity-100"
          >
            Description
          </Tab>
          <Tab
            className="outline-none mx-[7px] w-auto p-0 font-bold text-[.8em] uppercase leading-[.02em] text-[rgba(102,102,102,0.85)] transition-all
        duration-200 py-[10px] before:opacity-0 before:bg-[#000] before:content-['']
        before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:transition-all before:duration-300
        before:h-[3px] data-[selected]:text-[rgba(17,17,17,0.85)] data-[selected]:before:opacity-100
         data-[hover]:text-[rgba(17,17,17,0.85)] data-[hover]:before:opacity-100"
          >
            Feedbacks
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="pt-[1em] w-full">
            <div className="md:p-0 px-[15px]">
              <h1 className="text-[#000]">
                <strong>PRODUCT DESCRIPTION</strong>
              </h1>
              <table className="h-[375px] w-full mb-[1em] border-[#ececec] border-spacing-0">
                <tbody>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Thương hiệu:</strong>
                    </td>
                    <td width="213">
                      <em>Rolex</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Mẫu: </strong>
                    </td>
                    <td width="213">
                      <em>GMT Master II</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Bộ máy: </strong>
                    </td>
                    <td width="213">
                      <em>automatic</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Loại: </strong>
                    </td>
                    <td width="213">
                      <em>giờ, phút, ngày, GMT</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Mặt đồng hồ:</strong>
                    </td>
                    <td width="213">
                      <em>mặt số đen, kim và cọc số Baton</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Kích thước: </strong>
                    </td>
                    <td width="213">
                      <em>
                        40mm (kích thước dây: 20mm ;kích thước càng: 46mm ;độ
                        mỏng: 10mm)
                      </em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Mặt kính: </strong>
                    </td>
                    <td width="213">
                      <em>sapphire</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Dây: </strong>
                    </td>
                    <td width="213">
                      <em>dây Oyster Rolex</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Năm: </strong>
                    </td>
                    <td width="213">
                      <em>2005 (D167271 serial)</em>
                    </td>
                  </tr>
                  <tr>
                    <td width="63" className="text-[#000]">
                      <strong>Hộp & giấy tờ: </strong>
                    </td>
                    <td width="213">
                      <em>không</em>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p></p>
              <div>
                <h1 className="text-[#000]">
                  <strong>CHÍNH SÁCH BẢO HÀNH (6 THÁNG)</strong>
                </h1>
                <div>
                  <h3 className="text-[#000]">
                    <strong>I – ĐIỀU KIỆN BẢO HÀNH CỦA SPACETIME</strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Số điện thoại quý khách dùng để lưu thông tin chính là mã
                      số bảo hành của quý khách.
                    </li>
                    <li className="ml-[1.3em]">
                      Thời gian bảo hành của sản phẩm được tính từ ngày quý
                      khách nhận được sản phẩm.
                    </li>
                    <li className="ml-[1.3em]">
                      Thời gian bảo hành là 6 tháng (cho các dòng đồng hồ giá
                      trị dưới 10 triệu đồng) và 1 năm (cho các dòng đồng hồ giá
                      trị trên 10 triệu đồng).
                    </li>
                    <li className="ml-[1.3em]">
                      Thời gian xử lý bảo hành là 3 – 5 ngày làm việc cho các
                      lỗi nhỏ và 7 – 10 làm việc ngày cho các lỗi nặng.
                    </li>
                    <li className="ml-[1.3em]">
                      Thời gian bảo hành được tính từ ngày Spacetime nhận được
                      sản phẩm cần bảo hành.
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-[#000]">
                    <strong>II – HẠNG MỤC BẢO HÀNH CỦA SPACETIME</strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Pin: Thay pin miễn phí trong thời gian bảo hành.
                    </li>
                    <li className="ml-[1.3em]">
                      Mặt kính: Không bảo hành, hỗ trợ thay khi được khách yêu
                      cầu.
                    </li>
                    <li className="ml-[1.3em]">
                      Dây đồng hồ: Không bảo hành dây chính hãng.
                    </li>
                    <li className="ml-[1.3em]">
                      Khoá: Thay mới trong trường hợp hư/ mất, không bảo hành
                      khoá chính hãng.
                    </li>
                    <li className="ml-[1.3em]">
                      Đồng hồ chạy nhanh/ chậm: Bảo hành lau dầu, kiểm tra.
                    </li>{" "}
                    <li className="ml-[1.3em]">
                      Đánh bóng đồng hồ: Vệ sinh miễn phí.
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-[#000]">
                    <strong>
                      III – CÁC TRƯỜNG HỢP SPACETIME KHÔNG NHẬN BẢO HÀNH
                    </strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị vào nước. (Đồng hồ Cổ điển khả năng chống nước
                      kém)
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm hết thời hạn bảo hành.
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm gặp các lỗi do tác động cơ học bên ngoài (rơi
                      rớt, va chạm, …) trong quá trình sử dụng.
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị hao mòn theo thời gian.
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị hư do thiên tai, côn trùng, động vật, rỉ sét,
                      ăn mòn, ….
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm có dấu hiệu bị cấn, chèn đè, …
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm không sử dụng đúng quy cách của nhà sản xuất (vào
                      nước, hóa chất, nhiễm từ, ….)
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị mở, sữa chữa, can thiệp bởi các kỹ thuật viên
                      không thuộc Spacetime
                    </li>
                    <li className="ml-[1.3em]">
                      IC (Đối với đồng hồ Quartz): Không bảo hành.
                    </li>
                  </ol>
                  <p></p>
                  <p>
                    <strong>Lưu ý:</strong>
                    &nbsp;Quý khách vui lòng đảm bảo đồng hồ cần bảo hành của
                    quý khách được vận chuyển an toàn đến Spacetime. Chúng tôi
                    không chịu bất kỳ trách nhiệm pháp lý nào đối với việc mất
                    mát hoặc hư hỏng trong quá trình gửi đồng hồ cần bảo hành
                    lại Spacetime.
                  </p>
                </div>
              </div>
              <p>
                <span className="text-[#000]">
                  ————————————————————————————————-
                </span>
              </p>
              <div>
                <h1 className="text-[#000]">
                  <strong>CHÍNH SÁCH ĐỔI TRẢ (7 NGÀY)</strong>
                </h1>
                <div>
                  <h3 className="text-[#000]">
                    <strong>I – ĐIỀU KIỆN ĐỔI TRẢ CỦA SPACETIME</strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Đổi trả chỉ có giá trị theo số điện thoại người mua, không
                      sang nhượng với bất kỳ hình thức nào
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm phải nằm trong thời gian đổi trả. Thời gian đổi
                      trả được tính từ ngày quý khách nhận được sản phẩm
                    </li>
                    <li className="ml-[1.3em]">Thời gian đổi trả là 7 ngày</li>
                    <li className="ml-[1.3em]">
                      Thời gian xử lý đổi trả từ 3-5 ngày làm việc từ khi
                      Spacetime nhận được sản phẩm đổi trả
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-[#000]">
                    <strong>II – CHI TIẾT ĐỔI TRẢ</strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Sau khi nhận lại sản phẩm, kỹ thuật viên Spacetime sẽ tiến
                      hành đánh giá mức độ hao hụt của sản phẩm mà định giá lại
                      giá trị của sản phẩm cần đổi trả
                    </li>
                    <li className="ml-[1.3em]">
                      Nếu sản phẩm được trả lại ngay tại thời điểm quý khách
                      nhận được sản phẩm nhưng không ưng ý và chưa sử dụng, quý
                      khách sẽ được hoàn 100% tiền
                    </li>
                    <li className="ml-[1.3em]">
                      Nếu sản phẩm đã được sử dụng, quý khách sẽ được hoàn tiền
                      từ 70% đến 95% giá trị sản phẩm tùy theo mức độ đánh giá
                    </li>
                    <li className="ml-[1.3em]">
                      Spacetime không chấp nhận đổi trả nếu sản phẩm bị hao hụt
                      còn dưới 70% so với tình trạng ban đầu
                    </li>
                    <li className="ml-[1.3em]">
                      Nếu quý khách không muốn hoàn tiền sẽ được đổi sang sản
                      phẩm khác, và bù thêm hay được hoàn lại phần chênh lệch
                      giữa giá trị tại thời điểm kiểm định của sản phẩm cần đổi
                      trả và giá bán của sản phẩm được đổi trả
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-[#000]">
                    <strong>
                      III – CÁC TRƯỜNG HỢP SPACETIME KHÔNG NHẬN ĐỔI TRẢ
                    </strong>
                  </h3>
                  <ol>
                    <li className="ml-[1.3em]">
                      Sản phẩm không còn trong thời gian đổi trả
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm được đổi trả không khớp với số điện thoại được
                      đổi trả
                    </li>
                    <li className="ml-[1.3em]">
                      Các lỗi do tác động cơ học bên ngoài (rơi rớt, va chạm, …)
                      trong quá trình sử dụng
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị hư do thiên tai, côn trùng, động vật, rỉ sét,
                      ăn mòn, ….
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm có dấu hiệu bị cấn, chèn đè, …
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm không sử dụng đúng quy cách của nhà sản xuất (vào
                      nước, hóa chất, nhiễm từ, ….)
                    </li>
                    <li className="ml-[1.3em]">
                      Sản phẩm bị mở, sữa chữa, can thiệp bởi các kỹ thuật viên
                      không thuộc Spacetime)
                    </li>
                  </ol>
                  <p></p>
                  <p>
                    <strong>Lưu ý:</strong>
                    &nbsp;Quý khách vui lòng đảm bảo đồng hồ cần đổi trả của quý
                    khách được vận chuyển an toàn đến Spacetime. Chúng tôi không
                    chịu bất kỳ trách nhiệm pháp lý nào đối với việc mất mát
                    hoặc hư hỏng trong quá trình gửi đồng hồ cần bảo hành lại
                    Spacetime.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="pt-[1em] w-full">
            <div className="md:p-0 px-[15px]">
              <div className="max-w-full relative m-0 p-[0_15px_30px] w-full">
                <h3 className="text-[#000]">Reviews</h3>
                <p>There are no reviews yet.</p>
              </div>
              <div className="max-w-full relative m-0 p-[0_15px_30px] w-full">
                <div className="border-[#000] border-[2px] border-solid p-[15px_30px_30px]">
                  <div>
                    <h3 className="text-[#000]">
                      Be the first to review “ROLEX GMT MASTER II ref 16710”{" "}
                    </h3>
                    <form className="mx-[-15px] flex flex-row flex-wrap">
                      <p className="w-full p-[0_15px]">
                        <label htmlFor="comment">
                          Your review&nbsp;
                          <span class="required">*</span>
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          cols="45"
                          rows="8"
                          required=""
                        ></textarea>
                      </p>
                      <p className="w-full p-[0_15px] flex-1">
                        <label htmlFor="comment">
                          Name&nbsp;
                          <span class="required">*</span>
                        </label>
                        <input
                          id="author"
                          name="author"
                          type="text"
                          value=""
                          size="30"
                          required=""
                        />
                      </p>
                      <p className="w-full p-[0_15px] flex-1">
                        <label htmlFor="comment">
                          Email&nbsp;
                          <span class="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value=""
                          size="30"
                          required=""
                        />
                      </p>
                      <p className="w-full p-[0_15px]">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />
                        <label for="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="w-full p-[0_15px]">
                        <input
                          name="submit"
                          type="submit"
                          id="submit"
                          class="submit"
                          value="Submit"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
