import { ReactNode } from "react";

const Page = ({ children, id }: { children: ReactNode; id: string }) => {
  return (
    <div
      className="flex justify-center items-center h-screen ml-[200px]"
      id={id}
    >
      {children}
    </div>
  );
};

export default Page;
