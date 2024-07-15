import Main from "../components/Main";
import Menu from "../components/Menu";

function MainPage({ page }: { page: string }) {
  return (
    <div className="bg-[#111111] flex justify-center py-[5rem] m-auto text-white">
      <div className="w-[70%] flex flex-col md:justify-between m-auto gap-5 min-h-screen h-fit md:flex-row">
        <Menu page={page} />
        <Main page={page} key={page} />
      </div>
    </div>
  );
}

export default MainPage;
