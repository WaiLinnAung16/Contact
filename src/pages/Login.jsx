import React from "react";
import bg from "../assets/login-bg.svg";
import Button from "../utilities/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../context/api/contactApi";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../context/services/authSlice";
import { Toaster, toast } from "react-hot-toast";
import ShowPassword from "../utilities/ShowPassword";
const Login = () => {
  const location = useLocation();
  const nav = useNavigate();
  const email = location?.state?.email;
  const password = location?.state?.password;

  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: email ? email : "",
      password: password ? password : "",
    },
    validate,
    onSubmit: async (values) => {
      const { data } = await login(values);
      console.log(data);
      if (data?.success) {
        dispatch(addUser({ user: data?.user, token: data?.token }));
        toast.success("Successfully login 🤩");
        setTimeout(() => {
          nav("/");
        }, 2000);
      } else {
        toast.error("Please enter correct email and password");
      }
    },
  });
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Toaster position="bottom-center" />
      <div className="w-full md:w-[500px] h-full p-8 mx-3 bg-[#fafafa] backdrop-blur-md bg-opacity-90 shadow-md rounded-md flex gap-5 flex-col">
        <div>
          <h1 className=" font-serif font-black text-3xl text-primary">
            Welcome Back
          </h1>
          <h2 className=" text-lg">Login to your account</h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col gap-3 w-full select-none"
        >
          <div>
            <label htmlFor="email" className=" block">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
            {formik.errors.email ? (
              <span className=" text-red-500 text-xs before:content-['*'] before:mr-1">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className=" block">
              Password
            </label>
            <ShowPassword
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <span className=" text-red-500 text-xs before:content-['*'] before:mr-1 block mt-2">
                {formik.errors.password}
              </span>
            ) : null}
            <p className="inline-block mt-2 underline font-light text-sm text-gray-700 tracking-wide cursor-pointer hover:font-medium">
              Forgot password?
            </p>
          </div>
          <Button text={"Login"} />
        </form>
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
