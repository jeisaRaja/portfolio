function HomeHeader() {
  return (
    <div className="min-h-[13rem] w-full  rounded-lg">
      <div className="text-left">
        <h1 className="text-[2.5rem] font-bold text-white mb-4">Hey there!</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hi! I'm a{" "}
          <span className="font-bold text-blue-300">
            full-stack web developer
          </span>{" "}
          based in <span className="font-bold">Indonesia</span>, with a passion
          for <span className="font-bold">backend development</span>. Lately,
          I've been enjoying building <span className="font-bold">TUIs</span>{" "}
          and <span className="font-bold">games</span>. Check out my projects
          below!
        </p>
      </div>

      <div className="hidden md:flex justify-start gap-6">
        <button className="font-medium py-2 px-6 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Projects
        </button>
        <button className="font-medium py-2 px-6 bg-blue-600  text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Experiences
        </button>
        <button className="font-medium py-2 px-6 bg-blue-600  text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Skills
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
