interface ProjectItemCardProps {
  title: string;
  description: string;
}

function ProjectItemCard({ title, description }: ProjectItemCardProps) {
  return (
    <div className="flex flex-col flex-grow md:w-[48%] h-[20rem] bg-zinc-800 p-4 rounded-lg mb-7">
      <img src="www" alt="" />
      <h1 className="mb-4 font-bold text-lg">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItemCard;
