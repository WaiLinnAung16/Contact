import React from "react";
import { FiChevronDown } from "react-icons/fi";
const Navbar = ({ data }) => {
  console.log(data);
  return (
    <nav className="w-full h-[80px] px-5 flex items-center shadow">
      <div className="flex-1">
        <h1 className=" font-serif font-extrabold text-xl text-primary">
          Hi {data?.user.name} 👋
        </h1>
        <p className=" text-sm">It's good to see you again.</p>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100">
        <div className=" w-10 h-10 bg-primary text-white rounded-full grid place-content-center">
          <h1 className="font-serif font-bold uppercase">
            {data?.user?.name.slice(0, 1)}
          </h1>
        </div>
        <div className="flex items-center gap-2 text-dark">
          <h1>{data?.user?.name}</h1>
          <FiChevronDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
