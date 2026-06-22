import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactButton() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="mailto:devanshsaini.er@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:scale-110 transition"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://www.linkedin.com/in/devansh-saini-821657291/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/devannshsainii/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:scale-110 transition"
      >
        <FaInstagram />
      </a>
    </div>
  );
}