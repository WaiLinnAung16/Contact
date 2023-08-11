import React from "react";
import bg from "../assets/login-bg.svg";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full md:w-[500px] h-full p-8 mx-3 bg-white backdrop-blur-md bg-opacity-90 shadow-md rounded-md flex gap-5 flex-col">
        <div>
          <h1 className=" font-serif font-black text-3xl text-primary">
            Welcome Back
          </h1>
          <h2 className=" text-lg">Login to your account</h2>
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
            <label htmlFor="password" className=" block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
            <p className="inline-block mt-2 underline font-light text-sm text-gray-700 tracking-wide cursor-pointer hover:font-medium">
              Forgot password?
            </p>
          </div>
          <Button text={"Login"} />
        </div>
        <div>
          <p className=" font-light">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="cursor-pointer underline font-normal hover:font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
