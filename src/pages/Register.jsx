import React from "react";
import bg from "../assets/login-bg.svg";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full md:w-[500px] p-8 mx-3 bg-white backdrop-blur-md bg-opacity-90 shadow-md rounded-md flex gap-5 flex-col">
        <div>
          <h1 className=" font-serif font-black text-3xl text-primary">
            Create Account
          </h1>
          <h2 className=" text-lg">Register your information</h2>
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <div>
            <label htmlFor="username" className=" block">
              Name
            </label>
            <input
              type="text"
              id="username"
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className=" block">
              Email
            </label>
            <input
              type="text"
              id="email"
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className=" block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password_confirmation" className=" block">
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
          </div>
          <Button text={"Sign up"} />
        </div>
        <div>
          <p className=" font-light">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="cursor-pointer underline font-normal hover:font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
