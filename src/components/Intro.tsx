const Intro = () => {
  return (
    <div className="text-green-50">
      <h1 className="text-5xl font-bold font-quantico mb-3 drop-shadow-lg">
        Jeisa Raja
      </h1>
      <p className="w-[380px] text-lg font-quantico text-green-100">
        <span className="font-bold ">Fullstack web developer</span> based in{" "}
        <span className="font-bold">Indonesia</span>
        <br />
        Specialized in Go and Typescript
      </p>
      <div className="flex gap-3 mt-5">
        <a href="#projects">
          <button className="px-6 py-2 bg-black text-green-50 font-semibold rounded-lg border border-green-300 shadow-lg hover:bg-green-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 transform hover:scale-105 transition duration-300 ease-in-out">
            See my projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
