import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ShowPassword = ({ value, onChange, id = "password" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        value={value}
        onChange={onChange}
        className=" w-full py-2 pl-3 outline-none rounded border-2 border-dark focus:border-primary"
      />
      {showPassword ? (
        <AiOutlineEyeInvisible
          onClick={handleShowPassword}
          className=" absolute right-3 top-2 w-7 h-7 cursor-pointer rounded-full p-1 hover:bg-gray-200"
        />
      ) : (
        <AiOutlineEye
          onClick={handleShowPassword}
          className=" absolute right-3 top-2 w-7 h-7 cursor-pointer rounded-full p-1 hover:bg-gray-200"
        />
      )}
    </div>
  );
};

export default ShowPassword;
