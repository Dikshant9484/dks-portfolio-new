import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const About = () => {
  const bgRef = useRef(null);
  const cardRef = useRef(null);

  /* ---------- THREE.JS BACKGROUND ---------- */
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    bgRef.current.appendChild(renderer.domElement);

    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 18;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => bgRef.current.removeChild(renderer.domElement);
  }, []);

  /* ---------- 3D TILT ---------- */
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.transform = `
      perspective(1200px)
      rotateX(${(y - rect.height / 2) / 25}deg)
      rotateY(${(rect.width / 2 - x) / 25}deg)
      scale(1.04)
    `;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  /* ---------- DATA ---------- */
  const programmingLanguages = ["C", "Python", "Java", "SQL"];
  const webTechnologies = ["HTML","CSS","JavaScript","React.js","Node.js","Express.js","MongoDB","Streamlit","Flask"];
  const mlDlSkills = ["Scikit-Learn","TensorFlow","Keras","CNN","ANN","Pandas","NumPy","Matplotlib"];
  const genAiSkills = ["LLMs","LangChain","Hugging Face"];
  const tools = ["Figma","VS Code"];

  const workExperience = [
  {
    title: "Web Developer Intern – Bharat Intern",
    duration: "Jan 2025 – Feb 2025",
    details: [
      "Developed and optimized web applications using React and Django.",
      "Collaborated with a team to design responsive and user-friendly interfaces.",
      "Implemented backend functionalities and integrated REST APIs for seamless performance.",
      "Gained hands-on experience in full-stack development and problem-solving.",
    ]
  },
  {
    title: "Data Analysis Intern – Cognifyz Technology",
    duration: "Sept 2024 – Oct 2024",
    details: [
      "Worked on data analysis tasks including data preprocessing and insights generation.",
      "Applied basic statistical techniques to analyze structured datasets."
    ]
  },
  {
    title: "Trainee – Technology Innovation Hub, ISI Kolkata",
    duration: "Aug 2025 – Sept 2025",
    details: [
      "Performed data cleaning and regression analysis on real-world datasets.",
      "Learned fundamentals of Large Language Models (LLMs).",
      "Covered Machine Learning overview, regression, and classification techniques."
    ]
  }
];


  const achievements = [
    {
      title: "Finalist – HACKTANK (BizTech Hackathon)",
      org: "OPTIMA, IIT Kharagpur",
      desc: "Selected as finalist in a national-level techno-optimization hackathon focused on business + technology solutions."
    },
    {
      title: "Finalist – TECHNICHE Entrepreneur Hackathon",
      org: "IIT Guwahati",
      desc: "Shortlisted among top teams for innovative entrepreneurial and problem-solving approach."
    },
    {
      title: "Research Publication – IGI Global",
      org: "Enhancing Customer Interactions in FinTech with NLP",
      desc: "Published a peer-reviewed review paper under the guidance of Mr. Piyal Roy (Programme Coordinator, Brainware University) with teammate Eshani Banik.",
      link: "https://doi.org/10.4018/979-8-3693-9944-6.ch010"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20">
      <div ref={bgRef} className="fixed inset-0 -z-10 pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <p className="text-gray-300 text-center mb-8">
              Computer Science student passionate about Full Stack Development,
              Machine Learning, and Generative AI, with hands-on experience in
              hackathons, research, and real-world projects.
            </p>

            {/* SKILLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HoverBox title="Programming Languages" items={programmingLanguages} />
              <HoverBox title="Web Technologies" items={webTechnologies} />
              <HoverBox title="ML / DL" items={mlDlSkills} />
              <HoverBox title="Generative AI" items={genAiSkills} />
              <HoverBox title="Tools" items={tools} />
            </div>

            {/* WORK EXPERIENCE */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              {workExperience.map((exp, i) => (
                <HoverCard key={i} title={exp.title} items={exp.details} />
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">🏆 Achievements & Publications</h3>
              {achievements.map((ach, i) => (
                <div key={i} className="mb-4">
                  <HoverCard
                    title={`${ach.title} — ${ach.org}`}
                    items={[ach.desc]}
                  />
                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 text-sm underline ml-4"
                    >
                      View DOI
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

/* ---------- REUSABLE UI ---------- */

const HoverBox = ({ title, items }) => (
  <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 hover:scale-110 transition">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const HoverCard = ({ title, items }) => (
  <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all mb-4">
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);
