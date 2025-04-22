
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SecurityContent } from "@/components/SecurityContent";

const SecurityPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#111827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <SecurityContent />
      </div>
    </div>
  );
};

export default SecurityPage;
