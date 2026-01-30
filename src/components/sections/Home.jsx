import profileImg from "../../assets/dks.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto px-6">

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* Badge */}
              <span className="inline-block mb-6 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg">
                PORTFOLIO
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Hello, I’m <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Dikshant Kumar Singh
                </span>
              </h1>

              <p className="text-gray-300 mb-8 max-w-lg">
                Full-Stack Developer & AI Enthusiast building scalable web
                applications and intelligent solutions with Machine Learning
                and Generative AI.
              </p>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
                Say Hello
              </button>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition"
              />
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
