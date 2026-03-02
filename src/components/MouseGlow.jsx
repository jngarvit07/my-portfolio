import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const glow = document.getElementById("mouse-glow");
    const cursor = document.getElementById("mouse-cursor");

    if (!glow && !cursor) return;

    const current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const target = { ...current };
    let rafId = null;

    const updatePositions = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;

      if (glow) {
        glow.style.left = `${current.x}px`;
        glow.style.top = `${current.y}px`;
      }

      if (cursor) {
        cursor.style.left = `${target.x}px`;
        cursor.style.top = `${target.y}px`;
      }

      rafId = null;
    };

    const handleMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;

      if (rafId === null) {
        rafId = requestAnimationFrame(updatePositions);
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div
        id="mouse-glow"
        className="fixed w-[500px] h-[500px] pointer-events-none rounded-full bg-cyan-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-75"
      />
      <div
        id="mouse-cursor"
        className="fixed w-4 h-4 pointer-events-none rounded-full border border-cyan-300/40 -translate-x-1/2 -translate-y-1/2 z-50"
      />
    </>
  );
}
