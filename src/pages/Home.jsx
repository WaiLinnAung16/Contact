import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  const data = useSelector((store) => store.authSlice);
  console.log(data);
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar data={data} />
        {<Outlet />}
      </div>
    </section>
  );
};

export default Home;
