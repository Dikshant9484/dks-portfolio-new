import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">

        <h3 className="text-xl font-bold text-white mb-4">
          Dikshant Kumar Singh
        </h3>

        <div className="flex justify-center gap-8 text-2xl mb-6 text-white">

          <a href="https://github.com/Dikshant9484" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dikshant-kumar-singh-0a6433297/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://youtube.com/@DikshantkumarSingh-q9i" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>

        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
};
