import { useEffect, useState } from "react";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-1/2 max-w-[100px] fixed bottom-5 left-10 text-slate-100 flex flex-col gap-2">
      <div className="relative flex flex-col">
        <div
          className="absolute w-1 h-5 bg-white transition-transform duration-300"
          style={{
            transform: `translateY(${activeSection === "home" ? "0.5rem" : activeSection === "projects" ? "3rem" : activeSection === "about" ? "5.5rem" : "8rem"}) translateX(-1rem)`,
          }}
        />
        <a
          href="#home"
          className={`py-2 ${activeSection === "home" ? "font-bold" : ""}`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`py-2 ${activeSection === "projects" ? "font-bold" : ""}`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`py-2 ${activeSection === "about" ? "font-bold" : ""}`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`py-2 ${activeSection === "contact" ? "font-bold" : ""}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
