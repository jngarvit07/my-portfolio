export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white flex justify-between px-10 py-4 z-50">
      <h1 className="font-bold text-xl">Garvit Jain</h1>
      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
