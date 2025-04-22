
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface SidebarProps {
  className?: string;
}

const apiTopicsGroup = [
  
  
];

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const isApiConnectionPage = location.pathname === "/api-connection";

  // State to track open/closed status for each submenu group
  const [openGroups, setOpenGroups] = useState(
    apiTopicsGroup.map((_, idx) => idx === 0) // first group open by default
  );

  const handleToggle = (groupIdx: number) => {
    setOpenGroups((prev) =>
      prev.map((val, idx) => (idx === groupIdx ? !val : val))
    );
  };

  return (
    <aside
      className={cn(
        "w-72 flex-shrink-0 border-r border-zinc-800 bg-[#111827] overflow-y-auto h-[calc(100vh-48px)]",
        className
      )}
    >
      <div className="px-4 py-2">
        <div className="mb-8">
          <div className="text-sm text-zinc-400 mb-3">[Fortune Vault] API tích hợp kho quà Fortune Vault</div>
          <nav className="space-y-1">
            <SidebarLink label="Contents" isHeading />
            <SidebarLink 
              label="Giới thiệu chung"
              to="/intro"
              isActive={location.pathname === "/intro"}
            />
            <SidebarLink 
              label="Yêu cầu bảo mật"
              to="/security" 
              isActive={location.pathname === "/security"} 
            />
            <SidebarLink 
              label="Kết nối API"
              to="/api-connection" 
              isActive={location.pathname === "/api-connection"} 
            />
         
            <SidebarLink label="FAQ" href="#faq" to="/faq" />

            {/* Custom: Expandable submenus for API sections - only show when not on API connection page */}
            {!isApiConnectionPage && apiTopicsGroup.map((group, groupIdx) => (
              <div key={group.group} className="mt-4">
                <button
                  className="w-full flex items-center text-left px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md font-semibold transition-all"
                  aria-expanded={openGroups[groupIdx]}
                  onClick={() => handleToggle(groupIdx)}
                >
                  {openGroups[groupIdx] ? (
                    <ChevronDown className="mr-2 h-4 w-4" />
                  ) : (
                    <ChevronRight className="mr-2 h-4 w-4" />
                  )}
                  {group.group}
                </button>
                {openGroups[groupIdx] && (
                  <ul className="ml-7 mt-1 space-y-1">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-2 py-1 text-xs text-zinc-300 hover:text-blue-400 hover:bg-zinc-900 rounded transition-all font-mono"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  label: string;
  href?: string;
  to?: string;
  isActive?: boolean;
  isHeading?: boolean;
}

function SidebarLink({ label, href = "#", to, isActive, isHeading }: SidebarLinkProps) {
  if (isHeading) {
    return (
      <div className="px-2 py-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
        {label}
      </div>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          "block px-2 py-1.5 text-sm rounded-md",
          isActive
            ? "bg-zinc-800 text-white font-medium"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        )}
      >
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cn(
        "block px-2 py-1.5 text-sm rounded-md",
        isActive
          ? "bg-zinc-800 text-white font-medium"
          : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
      )}
    >
      {label}
    </a>
  );
}
