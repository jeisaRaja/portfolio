import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagePos((prev) => {
        const deltaX = (pos.x - prev.x) * 0.01;
        const deltaY = (pos.y + scrollY - prev.y) * 0.01;

        if (Math.abs(deltaX) < 0.1 && Math.abs(deltaY) < 0.1) {
          clearInterval(interval);
          return { x: pos.x, y: pos.y + scrollY };
        }

        return {
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [pos, scrollY]);

  return (
    <div
      className="bg-no-repeat bg-contain bg-left-top bg-black font-quantico"
      style={{ backgroundImage: "url('/output.png')" }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="space-station"
        style={{
          transform: `translate(${imagePos.x}px, ${imagePos.y}px)`,
          position: "absolute",
        }}
      ></div>
      <Menu />
      <Page children={<Intro />} id="home" />
      <Page children={<Intro />} id="projects" />
      <Page children={<Intro />} id="about" />
      <Page children={<Intro />} id="contact" />
    </div>
  );
}

export default App;
