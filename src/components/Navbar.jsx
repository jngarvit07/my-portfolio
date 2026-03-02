import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <nav className="relative top-0 left-0 w-fullz-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-center justify-center md:justify-center relative">

        {/* Logo
        <a href="#home" className="text-xl font-bold tracking-wide">
          Garvit<span className="text-cyan-400"></span>
        </a> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold uppercase tracking-wide text-sm">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
        ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-xl font-semibold uppercase tracking-wide text-sm">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}