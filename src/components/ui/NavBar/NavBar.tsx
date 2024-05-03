import { ReactNode, useState } from "react";
import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils/shadcn.utils";
import iconNavBar from "@/assets/icons/icon_navbar.svg";
import { Button } from "@/components/ui/Button/Button";
import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import { Switch } from "@/components/ui/Switch/Switch";
import NewTask from "@/components/NewTask/NewTask";

const navigation = [
  { name: "Platform Launch", href: "#", current: true },
  { name: "Marketing Plan", href: "#", count: 3, current: false },
  { name: "Roadmap", href: "#", count: 4, current: false },
];

interface NavBarProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex h-screen bg-navbar-bg">
      <div className="hidden md:flex flex-col w-[18.75rem] bg-navbar-bg border-r border-navbar-border">
        <div className="flex items-center h-16 ml-[2.125rem] mb-[40px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto items-stretch">
          <nav className="flex-1 bg-navbar-bg text-heading-md font-bold">
            <div className="font-bold text-heading-sm ml-[2rem] mb-[1.1875rem] text-navbar-text">
              ALL BOARDS (3)
            </div>
            {navigation.map((item) => (
              <a
                href="#"
                className={cn(
                  "flex items-center px-4 bg-navbar-bg text-gray-100 hover:bg-button-hover pb-[0.9375rem] pt-[0.9375rem] mr-6 rounded-r-full",
                  item.current &&
                    "bg-navbar-selected-bg text-navbar-selected-text"
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

            <a
              href="#"
              className={cn(
                "flex items-center px-4 bg-navbar-bg text-gray-100 hover:bg-button-hover hover:text-white pb-[0.9375rem] pt-[0.9375rem]  mr-6 rounded-r-full",
                "text-navbar-new"
              )}
            >
              <img
                src={iconNavBar}
                alt="kanban icon"
                className="h-4 w-4 text-navbar-text mr-2"
              />
              + Create New Board
            </a>
          </nav>
          <div className="mx-6">
            <div className="bg-gray-300 h-12 w-full rounded-md flex items-center justify-center mb-[1.375rem]">
              <img src={SunIcon} className="h-[1.125rem] w-[1.125rem]" />
              <Switch className="mx-[1.5rem]" />
              <img src={MoonIcon} className="h-[1.125rem] w-[1.125rem]" />
            </div>
            <div className="mb-[2.9375rem] text-gray-500 flex items-center">
              <img src={EyeIcon} className="mr-[0.9375rem]" />
              Hide Sidebar
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between min-h-24 bg-white border-b border-navbar-border">
          <div className="flex items-center px-4 text-heading-xl font-bold">
            Platform Launch
          </div>
          <div className="flex items-center pr-4">
            <Button onClick={() => setModal(true)}>+ Add New Task</Button>
          </div>
        </div>
        <div className="w-full min-h-full bg-body-background">{children}</div>
      </div>
      {modal && <NewTask modal={modal} setModal={setModal}/>}
    </div>
  );
};

export default NavBar;
