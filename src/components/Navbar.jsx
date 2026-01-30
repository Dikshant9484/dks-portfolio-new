import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [openLinks, setOpenLinks] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <span className="text-blue-500">DKS</span>
          </a>

          {/* MOBILE MENU ICON */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            &#9776;
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8 relative">

            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>

            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>

            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Resume
            </a>

            {/* LINKS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setOpenLinks(!openLinks)}
                className="text-gray-300 hover:text-white transition"
              >
                Links ▾
              </button>

              {openLinks && (
                <div className="absolute right-0 mt-2 w-40 bg-black/90 border border-white/10 rounded-lg shadow-lg">
                  <a
                    href="https://www.linkedin.com/in/dikshant-kumar-singh-0a6433297/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500/20 hover:text-white"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Dikshant9484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500/20 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};
