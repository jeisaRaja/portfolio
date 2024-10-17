import { FEATURED_PROJECT } from "../static-data/project-data";
import ProjectItemCard from "./ProjectItemCard";

function FeaturedProjects() {
  return (
    <div>
      <h1 className="text-[1.2rem] text-white mb-5 w-full mt-6">
        # Featured Projects
      </h1>
      <div className="w-[100%] flex flex-wrap gap:2 md:gap-5 justify-start">
        {FEATURED_PROJECT.map((project) => {
          return (
            <ProjectItemCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
