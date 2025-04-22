
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("flex items-center justify-between border-b border-zinc-800 bg-[#111827] px-4 py-2", className)}>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M10 17h4V9h-4v8z" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 19v2" />
            <path d="M15 19v2" />
          </svg>
        </div>
        <span className="text-sm font-medium text-white">Developer</span>
      </div>
      <div className="flex flex-1 items-center justify-center max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full bg-zinc-900 border border-zinc-800 py-2 pl-8 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>
      <div>
        <button className="flex items-center justify-center rounded-full text-sm font-medium text-white">
          <span className="ml-2">Yêu cầu bảo mật</span>
        </button>
      </div>
    </header>
  );
}
