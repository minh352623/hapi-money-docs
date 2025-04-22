
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { IntroContent } from "@/components/IntroContent";

const IntroPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#111827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <IntroContent />
      </div>
    </div>
  );
};

export default IntroPage;
