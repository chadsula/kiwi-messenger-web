import { useState, type JSX } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import type { View } from "./types/View";

// Component imports
import Account from "./components/Account";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Calls from "./components/Calls";
import Communities from "./components/Communities";
import Updates from "./components/Updates";
import Settings from "./components/Settings";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import ResizablePanel from "./components/ResizablePanel";

// Styles
import "./App.css";

// App Entry Point
export default function App() {
  // Detect mobile screen based on width and aspect ratio
  const isMobile = useMediaQuery("(max-width: 768px), (max-aspect-ratio: 1/1)");

  // Conditionally render based on device type
  return isMobile ? <AppMobile /> : <AppDesktop />;
}

// Mapping of view identifiers to component render functions
const viewComponents: Record<View, () => JSX.Element> = {
  account: () => <Account />,
  chat: () => <Chat />,
  settings: () => <Settings />,
  chatlist: () => <ChatList />,
  calls: () => <Calls />,
  communities: () => <Communities />,
  updates: () => <Updates />,
};

// --- Mobile App Layout ---
function AppMobile() {
  // Track the currently active view
  const [activeView, setActiveView] = useState<View>("chatlist");

  // Views that should display the mobile header
  const viewsWithHeader: View[] = [
    "calls",
    "chatlist",
    "communities",
    "updates",
  ];

  // Get the corresponding component for the active view
  const ViewComponent =
    viewComponents[activeView] ?? (() => <div>View Not Found</div>);

  return viewsWithHeader.includes(activeView) ? (
    <>
      <HeaderMobile activeView={activeView} setActiveView={setActiveView} />
      <ViewComponent />
    </>
  ) : (
    <ViewComponent />
  );
}

// --- Desktop App Layout ---
function AppDesktop() {
  // Track the currently active view
  const [activeView, setActiveView] = useState<View>("chatlist");

  return (
    <div className="flex h-screen">
      {/* Persistent left-side header for navigation */}
      <HeaderDesktop activeView={activeView} setActiveView={setActiveView} />

      {/* Sidebar panel with dynamic content based on view */}
      <ResizablePanel>
        <SidebarContentPanel activeView={activeView} />
      </ResizablePanel>

      {/* Always show Chat component on the right */}
      <Chat />
    </div>
  );
}

// --- Props Interface ---
interface Props {
  activeView: View;
}

// --- Renders the correct component for the active sidebar view ---
function SidebarContentPanel({ activeView }: Props) {
  const ViewComponent =
    viewComponents[activeView] ?? (() => <div>View Not Found</div>);
  return <ViewComponent />;
}
