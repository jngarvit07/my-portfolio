export default function Navbar() {
  const menu = ["home","about","skills","experience","projects","contact"];

  return (
    <nav className="w-full px-6 md:px-12 py-6 mb-4">
      <ul className="flex justify-center gap-12 font-semibold uppercase tracking-wide text-sm">
        {menu.map(item => (
          <li key={item}>
            <a href={`#${item}`} className="hover:text-cyan-400 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}