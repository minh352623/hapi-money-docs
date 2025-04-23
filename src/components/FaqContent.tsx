
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
    topic: "Kết nối API",
    question: "Tần suất request API tới Hapi Money như thế nào để đảm bảo performance hai bên?",
    answer: "- Với API check status transaction: 200 request/giây\n- Với API deposit: 200 request/giây\n- Với API withdrawn: 200 request/giây\n- Với API interest/claim: 200 request/giây"
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
