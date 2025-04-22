
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DocumentationContent } from "@/components/DocumentationContent";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-[#111827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DocumentationContent />
      </div>
    </div>
  );
};

export default Index;
