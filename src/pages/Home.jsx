import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
  const data = useSelector((store) => store.authSlice);
  console.log(data);
  return (
    <section className="flex">
      <SideBar />
      <div className="w-full">
        <Navbar data={data} />
        {<Outlet />}
      </div>
    </section>
  );
};

export default Home;
