
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FaqContent } from "@/components/FaqContent";

const FaqPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#111827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <FaqContent />
      </div>
    </div>
  );
};

export default FaqPage;
