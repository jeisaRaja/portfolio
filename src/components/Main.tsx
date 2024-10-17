import HomeCard from "./HomeCard";
import ProjectsCard from "./ProjectsCard";
import AboutCard from "./AboutCard";
import { Page } from "../utils/constant";

function Main({ page }: { page: string }) {
  return (
    <div>
      {(page === Page.Home && <HomeCard />) ||
        (page === Page.About && <AboutCard />) ||
        (page === Page.Projects && <ProjectsCard />)}
    </div>
  );
}

export default Main;
