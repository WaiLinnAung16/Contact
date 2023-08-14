import React from "react";
import bg from "../assets/login-bg.svg";
import Button from "../utilities/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useRegisterMutation } from "../context/api/contactApi";
import { Toaster, toast } from "react-hot-toast";
import ShowPassword from "../utilities/ShowPassword";
const Register = () => {
  const [register] = useRegisterMutation();
  const nav = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate,
    onSubmit: async (values) => {
      const datas = await register(values);
      // console.log(datas);
      if (datas?.data?.success) {
        const successMsg = datas?.data?.message;
        toast.success(`${successMsg}🤩`);
        setTimeout(() => {
          nav("/login", {
            state: {
              email: formik.values.email,
              password: formik.values.password,
            },
          });
        }, 2000);
      } else {
        const errors = datas?.error?.data?.errors;
        if (errors?.email) {
          const email = errors?.email;
          toast.error(email);
        } else {
          const password = errors?.password;
          toast.error(password);
        }
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
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-full md:w-[500px] p-8 mx-3 bg-[#fafafa] backdrop-blur-md bg-opacity-90 shadow-md rounded-md flex gap-5 flex-col">
        <div>
          <h1 className=" font-serif font-black text-3xl text-primary">
            Create Account
          </h1>
          <h2 className=" text-lg">Register your information</h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col gap-4 w-full select-none"
        >
          <div>
            <label htmlFor="name" className=" block">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
            />
            {formik.errors.name ? (
              <span className=" text-red-500 text-xs before:content-['*'] before:mr-1">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className=" block">
              Email
            </label>
            <input
              type="text"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
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
              <span className=" text-red-500 text-xs before:content-['*'] before:mr-1">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="password_confirmation" className=" block">
              Confirm Password
            </label>

            <ShowPassword
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              id="password_confirmation"
            />
          </div>
          <Button text={"Sign up"} />
        </form>
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
