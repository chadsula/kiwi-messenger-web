import { useRef, useState } from "react";

export default function ResizablePanel({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState(480); // default sidebar width
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = containerRef.current?.offsetWidth || 480;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      setWidth(Math.max(300, Math.min(newWidth, 1200))); // min/max width
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex relative" style={{ width }} ref={containerRef}>
      {children}
      <div
        className="w-[5px] cursor-ew-resize bg-transparent absolute right-0 top-0 bottom-0 transition-colors duration-200 hover:bg-black/10"
        onMouseDown={onMouseDown}
      />
    </div>
  );
}