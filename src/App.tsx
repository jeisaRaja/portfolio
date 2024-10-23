import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  return (
    <div
      className="bg-no-repeat bg-contain bg-left-top bg-black font-quantico"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Menu />
      <Page children={<Intro />} id="home" />
      <Page children={<Intro />} id="projects" />
      <Page children={<Intro />} id="about" />
      <Page children={<Intro />} id="contact" />
    </div>
  );
}

export default App;
