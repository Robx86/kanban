import { ReactNode, useState } from "react";
import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils/shadcn.utils";
import iconNavBar from "@/assets/icons/icon_navbar.svg";
import { Button } from "@/components/ui/Button/Button";
import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";
import EyeOpenIcon from "@/assets/icons/eye_open.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import { Switch } from "@/components/ui/Switch/Switch";
import NewTask from "@/components/NewTask/NewTask";
import PlusIcon from "@/assets/icons/plus.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu/DropdownMenu";
import Dialog from "@/components/CustomDialog/CustomDialog";
import { Separator } from "@/components/ui/Separator/Separator";

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
  const [DeleteBoard, setDeleteBoard] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-navbar-bg">
      {!hiddenSidebar ? (
        <div
          className={
            "hidden md:flex flex-col w-[18.75rem] bg-navbar-bg border-r border-navbar-border"
          }
        >
          <div className="flex items-center min-h-24 ml-[2.125rem] mb-[40px]">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto items-stretch">
            <nav className="flex-1 bg-navbar-bg text-heading-md font-bold">
              <div className="font-bold text-heading-sm ml-[2rem] mb-[1.1875rem] text-navbar-text tracking-widest">
                ALL BOARDS (3)
              </div>
              {navigation.map((item) => (
                <a
                  href="#"
                  className={cn(
                    "flex items-center px-4 bg-navbar-bg text-body-text-secondary hover:bg-primary/10 hover:text-primary pb-[0.9375rem] pt-[0.9375rem] mr-6 rounded-r-full",
                    item.current &&
                      "bg-navbar-selected-bg text-navbar-selected-text hover:bg-primary hover:text-white"
                  )}
                >
                  <img
                    src={iconNavBar}
                    className="h-4 w-4 mr-2"
                  />
                  {item.name}
                </a>
              ))}

              <a
                href="#"
                className={cn(
                  "flex items-center px-4 bg-navbar-bg text-gray-100 hover:bg-primary/10 hover:text-primary pb-[0.9375rem] pt-[0.9375rem]  mr-6 rounded-r-full",
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
              <Button
                variant={"outline"}
                onClick={() => {
                  setHiddenSidebar(true);
                }}
                className="mb-[2.9375rem] text-gray-500 flex items-center"
              >
                <img src={EyeIcon} className="mr-[0.9375rem]" />
                Hide Sidebar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            setHiddenSidebar(false);
          }}
          className="h-12 w-14 absolute text-white rounded-l-none rounded-r-full flex items-center justify-center bottom-8"
        >
          <img src={EyeOpenIcon} />
        </Button>
      )}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between min-h-24 bg-white border-b border-navbar-border">
          <div className="flex h-full">
            {hiddenSidebar && (
              <div className="flex">
                <img src={Logo} alt="Logo" className="ml-6" />
                <Separator orientation="vertical" className="ml-6 mr-2 h-full"/>
              </div>
            )}
            <div className="flex items-center px-4 text-heading-xl font-bold">
              Platform Launch
            </div>
          </div>

          <div className="flex items-center pr-4">
            <Button onClick={() => setModal(true)}>+ Add New Task</Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img className="ml-6" src={PlusIcon} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-8">
                <DropdownMenuItem>Editar Board</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setDeleteBoard(true);
                  }}
                >
                  Deletar Board
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full min-w-max bg-body-background min-h-max pb-10">
          {children}
        </div>
      </div>
      {modal && <NewTask modal={modal} setModal={setModal} />}
      {DeleteBoard && (
        <Dialog
          title="Delete this board?"
          description="Are you sure you want to delete the ‘Platform Launch’ board and all its tasks? This action cannot be reversed."
          textCancel="Cancel"
          textConfirm="Delete"
          onCancel={() => setDeleteBoard(false)}
          onConfirm={() => {}}
        />
      )}
    </div>
  );
};

export default NavBar;
