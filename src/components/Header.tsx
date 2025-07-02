import {
  MdMessage,
  MdOutlineMessage,
  MdGroups,
  MdOutlineGroups,
  MdSettings,
  MdOutlineSettings,
  MdAccountCircle,
  MdOutlineAccountCircle,
} from "react-icons/md";
import type { ReactNode } from "react";
import type { View } from "../types/View";

interface HeaderProps {
  activeView: View;
  setActiveView: (section: View) => void;
}

export function HeaderDesktop({ activeView, setActiveView }: HeaderProps) {
  return (
    <header className="flex flex-col justify-between min-w-[64px] py-3 border-r border-[rgba(134,150,160,0.15)]">
      <section className="flex flex-col items-center gap-3">
        <IconButton
          icon={activeView === "chatlist" ? <MdMessage /> : <MdOutlineMessage />}
          active={activeView === "chatlist"}
          onClick={() => setActiveView("chatlist")}
        />
        <IconButton
          icon={activeView === "communities" ? <MdGroups /> : <MdOutlineGroups />}
          active={activeView === "communities"}
          onClick={() => setActiveView("communities")}
        />
      </section>
      <section className="flex flex-col items-center gap-3">
        <IconButton
          icon={activeView === "settings" ? <MdSettings /> : <MdOutlineSettings />}
          active={activeView === "settings"}
          onClick={() => setActiveView("settings")}
        />
        <IconButton
          icon={activeView === "account" ? <MdAccountCircle /> : <MdOutlineAccountCircle />}
          active={activeView === "account"}
          onClick={() => setActiveView("account")}
        />
      </section>
    </header>
  );
}

export function HeaderMobile({ activeView, setActiveView }: HeaderProps) {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-10 flex justify-between bg-white dark:bg-[#111b21] py-2 px-6 border-t border-[rgba(134,150,160,0.15)]">
      <section className="flex gap-4">
        <IconButton
          icon={activeView === "chatlist" ? <MdMessage /> : <MdOutlineMessage />}
          active={activeView === "chatlist"}
          onClick={() => setActiveView("chatlist")}
        />
      </section>
      <section>
        <IconButton
          icon={activeView === "communities" ? <MdGroups /> : <MdOutlineGroups />}
          active={activeView === "communities"}
          onClick={() => setActiveView("communities")}
        />
      </section>
      <section className="flex gap-4">
        <IconButton
          icon={activeView === "settings" ? <MdSettings /> : <MdOutlineSettings />}
          active={activeView === "settings"}
          onClick={() => setActiveView("settings")}
        />
      </section>
      <section>
        <IconButton
          icon={activeView === "account" ? <MdAccountCircle /> : <MdOutlineAccountCircle />}
          active={activeView === "account"}
          onClick={() => setActiveView("account")}
        />
      </section>
    </header>
  );
}

interface IconButtonProps {
  icon: ReactNode;
  active: boolean;
  onClick: () => void;
}

function IconButton({ icon, active, onClick }: IconButtonProps) {
  return (
    <button
      className={`flex items-center justify-center w-8 h-8 p-2 rounded-full cursor-pointer transition-all duration-200
        ${active ? "bg-[rgba(128,128,128,0.253)]" : "bg-transparent"}
        hover:bg-[rgba(128,128,128,0.253)] hover:scale-105
        focus:outline-none [-webkit-tap-highlight-color:transparent]`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
