
import { CodeBlock } from "./CodeBlock";

export function IntroContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#111827] p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-white">Giới thiệu chung</h1>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Về API Hapi Money</h2>
          <p className="text-zinc-300">
            Hapi Money API là là một sản phẩm tài chính, hoạt động như một ví tích lũy, cho phép người dùng gửi token hoặc tiền pháp định và nhận lãi suất hằng ngày dựa trên số lượng tài sản đã gửi. Đây là một giải pháp thay thế cho tài khoản tiết kiệm truyền thống với tính linh hoạt cao hơn, giúp người dùng dễ dàng gửi, rút và tối ưu hóa lợi nhuận từ số dư của mình.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Quy trình tích hợp</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 1: Đối tác cung cấp các thông tin sau cho Hapi Money:</h3>
              <ul className="list-disc pl-6 text-zinc-300">
                <li>Flow tích hợp mong muốn</li>
                <li>Setting lãi suất mong muốn</li>
                <li>Setting fee mong muốn</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 2: Tích hợp API Hapi Money theo tài liệu trên môi trường sandbox:</h3>
              <ul className="list-disc pl-6 text-zinc-300">
                <li>Hapi Money cung cấp các thông tin sau trên sandbox cho đối tác: providerKey</li>
                <li>Đối tác cung cấp public key để kết nối phần bảo mật</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 3:</h3>
              <p className="text-zinc-300">Sau khi hoàn tất kết nối trên môi trường sandbox, đối tác cung cấp môi trường test hoặc ảnh chụp giao diện đổi quà của người dùng để Hapi Money nghiệm thu kết nối và hiển thị cho người dùng (nếu có).</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 4:</h3>
              <p className="text-zinc-300">Sau khi hoàn thành nghiệm thu, Hapi Money sẽ gửi thông tin môi trường PROD cho đầu mối của đối tác, bao gồm: providerKey, API URL. Đối tác cung cấp lại public key, địa chỉ IP cho Hapi Money để setup.</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 5:</h3>
              <p className="text-zinc-300">Hapi Money cấu hình hạn mức và ví test cho đối tác. Đối tác thực hiện 1 số giao dịch để đảm bảo thông lượng trên PROD.</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Bước 6:</h3>
              <p className="text-zinc-300">Thay đổi setting và fee theo thỏa thuận hợp tác giữa Hapi Money và đối tác. Triển khai đổi quà trên các nền tảng của đối tác.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Mô tả các bước xử lý</h2>
          <img 
            src="/hapi.png"
            alt="Flow diagram"
            className="w-full rounded-lg border border-zinc-700"
          />
        </section>
      </div>
    </div>
  );
}
