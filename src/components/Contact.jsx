import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>

      <div className="glass p-10 w-full max-w-xl space-y-6 text-lg text-left">

        <div className="flex items-center gap-4">
          <FaPhone className="text-cyan-400" />
          <a className="hover:text-cyan-400" class="phone-link" target="_blank"
            href="tel:+917425023161">
            7425023161
            </a>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-cyan-400" />
          <a className="hover:text-cyan-400" target="_blank"
             href="mailto:jaingarvit945@gmail.com">
            jaingarvit945@gmail.com
            </a>
        </div>

        <div className="flex items-center gap-4">
          <FaLinkedin className="text-cyan-400"/>
          <a className="hover:text-cyan-400" target="_blank"
             href="https://www.linkedin.com/in/jngarvit07">
            Garvit Jain
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaGithub className="text-cyan-400"/>
          <a className="hover:text-cyan-400" target="_blank"
             href="https://github.com/jngarvit07">
            Garvit Jain
          </a>
        </div>

      </div>
    </section>
  );
}