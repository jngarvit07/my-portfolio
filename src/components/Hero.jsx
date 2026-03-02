import { motion } from "framer-motion";

export default function Hero() {
  return (
    //style={{ top: "120px" }}  // id="home"
    <section className="section"> 
      <motion.h1 
        initial={{opacity:0,y:-40}} 
        animate={{opacity:1,y:0}} 
        transition={{duration:0.8}}
        className="text-6xl md:text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Garvit Jain
        </span>
      </motion.h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl">
        Software Engineer • Automation & Full Stack Developer
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="#contact"
          className="premium-btn relative inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 font-semibold shadow-[0_18px_45px_rgba(8,47,73,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(8,47,73,0.98)] transition-transform duration-300"
        >
          Contact Me
        </a>
        <a
          href="/public/resume.pdf"
          download="Garvit_Jain_Resume.pdf"
          className="premium-btn relative inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full border border-cyan-400/60 text-cyan-100/90 bg-white/5 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:bg-cyan-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}