const Intro = () => {
  return (
    <div className="text-slate-100">
      <h1 className="text-5xl font-bold font-roboto mb-3 drop-shadow-lg">
        Jeisa Raja
      </h1>
      <p className="w-[380px] text-lg font-roboto">
        <span className="font-bold ">Fullstack web developer</span> based in{" "}
        <span className="font-bold">Indonesia</span>, with a passion for backend
        development.
      </p>
      <div className="flex gap-3 mt-5">
        <a href="#projects">
          <button className="px-6 py-2 bg-black text-gray-400 font-semibold rounded-lg border border-amber-600 shadow-lg hover:bg-black hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition duration-300">
            See my projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
