import Avatar from "./Avatar";
import { Home, Briefcase, Info, GitHub, Linkedin } from "react-feather";
import { Link } from "react-router-dom";
import { Page } from "../utils/constant";

function Menu({ page }: { page: string }) {
  return (
    <div className="md:fixed  md:flex md:flex-col">
      <Avatar />
      <div className="flex flex-col h-[7.5rem]">
        <h1 className="flex justify-center mt-5 text-lg">Jeisa Raja</h1>
        <div className="flex flex-row px-3 gap-4 justify-center">
          <button className="text-xl text-center text-white font-sans font-semibold mb-5 mt-5 flex items-center justify-center h-10">
            <a
              href="https://github.com/jeisaRaja"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </button>
          <button className="text-xl text-center text-white font-sans font-semibold mb-5 mt-5 flex items-center justify-center h-10">
            <a
              href="https://www.linkedin.com/in/jeisatarigan/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </button>
        </div>
      </div>
      <hr className="border border-zinc-700 mb-5"></hr>
      <div className="text-zinc-200 w-[10rem]">
        <ul className="flex  md:flex-col gap-2 justify-center">
          <Link to="/">
            <button
              className={
                "hover:bg-zinc-800 flex items-center w-full rounded px-3 py-1 " +
                (page === Page.Home ? "btnActive" : "")
              }
            >
              <Home size={15} />
              <span className="ml-2">Home</span>
            </button>
          </Link>
          <Link to="/projects">
            <button
              className={
                "hover:bg-zinc-800 flex items-center w-full rounded px-3 py-1 " +
                (page === Page.Projects ? "btnActive" : "")
              }
            >
              <Briefcase size={15} />
              <span className="ml-2">Projects</span>
            </button>
          </Link>
          <Link to="/about">
            <button
              className={
                "hover:bg-zinc-800 flex items-center w-full rounded px-3 py-1 " +
                (page === Page.About ? "btnActive" : "")
              }
            >
              <Info size={15} />
              <span className="ml-2">About</span>
            </button>
          </Link>
          <Link to="/learning">
            <button
              className={
                "hover:bg-zinc-800 flex items-center w-full rounded px-3 py-1 " +
                (page === Page.Learning ? "btnActive" : "")
              }
            >
              <Info size={15} />
              <span className="ml-2">Learning</span>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
