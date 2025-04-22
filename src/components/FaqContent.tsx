
import { ScrollArea } from "@/components/ui/scroll-area";

interface FaqItem {
  id: number;
  topic?: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    topic: "Vấn đề chung",
    question: "Những thông tin nào cần đảm bảo hiển thị cho người dùng TRƯỚC khi đổi quà?",
    answer: "Trước khi đổi quà, những thông tin sau cần được hiển thị cho người dùng đọc và hiểu, tránh khiếu nại trong quá trình sử dụng quà:\n- Tên quà tặng + giá trị quà\n- Điều kiện sử dụng\n- Địa chỉ áp dụng (nếu có)"
  },
  {
    id: 2,
    question: "Những thông tin nào cần đảm bảo hiển thị cho người dùng SAU khi đổi quà xong?",
    answer: "Sau khi đổi quà, những thông tin sau cần hiển thị cho người dùng, tránh khiếu nại và đảm bảo trải nghiệm của người dùng:\n- Logo UrBox\n- Tên quà tặng + giá trị + Hình ảnh quà\n- Textcode sử dụng + Hình ảnh code (nếu có)\n- Điều kiện sử dụng\n- Địa chỉ áp dụng (nếu có)\n- PIN/Serial (nếu có)\n- Hạn sử dụng của code quà"
  },
  {
    id: 3,
    question: "Tôi có thể tự thiết kế hình ảnh quà tặng thay vì lấy từ UrBox không?",
    answer: "UrBox khuyến nghị đối tác sử dụng hình ảnh quà của UrBox. Do 1 số merchant hiện đang cung cấp code cho UrBox có quy định chặt chẽ về hình ảnh quà tặng."
  },
  {
    id: 4,
    topic: "Kết nối API",
    question: "Tần suất request API tới UrBox như thế nào để đảm bảo performance hai bên?",
    answer: "- Với API lấy danh sách quà: tần suất 1 lần / ngày. Do thông tin quà không thay đổi quá nhiều.\n- Với API đổi quà: 80 request/phút"
  },
  {
    id: 5,
    question: "API Lấy danh sách quà tặng từ kho quà UrBox có hạn chế item trả về?",
    answer: "Có. API lấy danh sách quà sẽ giới hạn 500 quà trong response. Nếu đối tác chạy nhiều hơn 500 quà, khi call API gift/list cần thêm filter (danh mục, brand,...) hoặc phân trang."
  }
];

export function FaqContent() {
  return (
    <div className="flex-1 overflow-hidden">
      <ScrollArea className="h-full">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold mb-8">FAQ</h1>
          
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.id} className="space-y-4">
                {item.topic && (
                  <h2 className="text-xl font-semibold text-zinc-400">{item.topic}</h2>
                )}
                <div className="bg-zinc-900 rounded-lg p-6">
                  <div className="flex gap-4">
                    <span className="text-zinc-500">{item.id}</span>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">{item.question}</h3>
                      <p className="text-zinc-400 whitespace-pre-line">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
