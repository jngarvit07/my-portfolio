import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999999,
        pointerEvents: show ? "auto" : "none",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s ease",
      }}
    >
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="glass scroll-glow w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
      >
        <FaArrowUp className="text-cyan-400 text-lg" />
      </button>
    </div>
  );
}