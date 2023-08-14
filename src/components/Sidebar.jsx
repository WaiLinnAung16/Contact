import React from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { IoIosContacts, IoIosCreate } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../context/services/authSlice";
import { Toaster, toast } from "react-hot-toast";

const SideBar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    nav("/login");
  };
  return (
    <aside className="min-h-screen bg-primary w-[20%] lg:w-[25%] p-5 flex flex-col gap-5">
      <Toaster position="bottom-center" />
      <div className="flex justify-between items-center ">
        <Link to={"/"} className="font-serif text-3xl font-bold text-white">
          WPAY
        </Link>
        <BsFillArrowLeftSquareFill className="text-white text-2xl" />
      </div>
      <div className="flex-1">
        <ul className="text-white flex flex-col gap-3">
          <NavLink
            to={"/"}
            className=" w-full rounded p-2 flex items-center gap-2"
          >
            <FiHome className="text-xl" /> Dashboard
          </NavLink>
          <NavLink
            to={"contacts"}
            className=" w-full rounded p-2 flex items-center gap-2"
          >
            <IoIosContacts className="text-2xl" />
            Contacts
          </NavLink>
          <NavLink
            to={"create"}
            className=" w-full rounded p-2 flex items-center gap-2"
          >
            <IoIosCreate className="text-xl" />
            Create Contacts
          </NavLink>
        </ul>
      </div>
      <button
        onClick={logout}
        className="bg-slate-300 text-dark p-2 rounded flex justify-center items-center gap-2 font-serif font-bold hover:bg-slate-200"
      >
        <ImExit className="text-xl" />
        Logout
      </button>
    </aside>
  );
};

export default SideBar;
