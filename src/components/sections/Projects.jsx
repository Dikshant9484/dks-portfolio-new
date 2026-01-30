import { RevealOnScroll } from "../RevealOnScroll";

import heritageImg from "../../assets/projects/heritage-india.png";
import signImg from "../../assets/projects/ai-sign-language.png";
import proctorImg from "../../assets/projects/video-proctoring.png";
import carImg from "../../assets/projects/mobile-car-arduino.png";
import gradingImg from "../../assets/projects/ai-grading-system.png";
import biomedicalImg from "../../assets/projects/biomedical-detection.png";


export const Projects = () => {
  const projects = [
    {
      title: "Heritage of India – SIH 2023",
      image: heritageImg,
      description: [
        "Developed a website using HTML, CSS, JavaScript and MongoDB.",
        "Created a responsive UI and managed database operations.",
        "Strengthened full-stack web development skills."
      ],
      tech: ["HTML", "CSS", "JavaScript", "MongoDB"]
    },
    {
      title: "AI Sign Language Generator – SIH 2024",
      image: signImg,
      description: [
        "AI platform generating Indian Sign Language gestures.",
        "Used TensorFlow/Keras deep learning models.",
        "Implemented real-time gesture extraction concepts."
      ],
      tech: ["Python", "TensorFlow", "Keras", "AI"]
    },
    {
      title: "Video Proctoring – IIT Kharagpur 2025",
      image: proctorImg,
      description: [
        "Python system detecting cheating using head movement & sound.",
        "Applied ML concepts and behavioral analysis.",
        "Focused on exam integrity automation."
      ],
      tech: ["Python", "Machine Learning", "AI"]
    },
    {
      title: "Mobile Control Car – 2024",
      image: carImg,
      description: [
        "Arduino-based mobile controlled vehicle.",
        "ESP32 wireless communication integration.",
        "Controlled through custom mobile APK."
      ],
      tech: ["Arduino", "ESP32", "Embedded Systems"]
    },
    {
      title: "AI Assignment Grading – 2025",
      image: gradingImg,
      description: [
        "Automated grading backend using FastAPI.",
        "Integrated Generative AI for scoring & feedback.",
        "Implemented rubric-based evaluation logic."
      ],
      tech: ["FastAPI", "Python", "Generative AI", "API"]
    },
    {
      title: "Biomedical Image Detection – 2025",
      image: biomedicalImg,
      description: [
        "Deep learning based biomedical image analysis.",
        "Feature extraction and classification models.",
        "Improved diagnostic pattern recognition."
      ],
      tech: ["TensorFlow", "Keras", "Deep Learning"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  bg-black/40 backdrop-blur-md
                  p-6 rounded-xl border border-white/10
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]
                  transition-all
                "
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-44 object-cover rounded-lg mb-4
                    border border-white/10
                    hover:scale-105 transition
                  "
                />

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        bg-blue-500/10 text-blue-500 py-1 px-3
                        rounded-full text-sm
                        transition hover:bg-blue-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
