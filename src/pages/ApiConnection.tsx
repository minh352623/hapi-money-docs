
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ApiContent } from "@/components/ApiContent";

const ApiConnection = () => {
  return (
    <div className="flex flex-col h-screen bg-[#111827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ApiContent />
      </div>
    </div>
  );
};

export default ApiConnection;
