import React, { ReactNode } from "react";
import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils/shadcn.utils";
import iconNavBar from "@/assets/icons/icon_navbar.svg";

const navigation = [
  { name: "Platform Launch", href: "#", current: true },
  { name: "Marketing Plan", href: "#", count: 3, current: false },
  { name: "Roadmap", href: "#", count: 4, current: false },
  { name: "+ Create New Board", href: "#", plus: true, current: false },
];

interface NavBarProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div className="flex h-screen bg-navbar-bg">
      <div className="hidden md:flex flex-col w-[18.75rem] bg-gray-800 border-r border-navbar-border">
        <div className="flex items-center h-16 ml-[2.125rem] mb-[40px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 bg-gray-800 text-heading-md font-bold">
            <div className="font-bold text-heading-sm ml-[2rem] mb-[1.1875rem] text-navbar-text">
              ALL BOARDS (3)
            </div>
            {navigation.map((item) => (
              <a
                href="#"
                className={cn(
                  "flex items-center px-4 bg-navbar-bg text-gray-100 hover:bg-gray-700 pb-[0.9375rem] pt-[0.9375rem]",
                  item.plus ? "text-navbar-new" : "text-navbar-text",
                  item.current &&
                    "bg-navbar-selected-bg text-navbar-selected-text mr-6 rounded-r-full"
                )}
              >
                <img
                  src={iconNavBar}
                  alt="kanban icon"
                  className="h-4 w-4 text-navbar-text mr-2"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-navbar-border">
          <div className="flex items-center px-4 text-heading-xl font-bold">
            Platform Launch
          </div>
          <div className="flex items-center pr-4">
            <button className="flex items-center text-button-text hover:text-button-text focus:outline-none bg-button-bg">
              + Add New Task
            </button>
          </div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
