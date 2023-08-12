import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className=" px-5 py-2 bg-primary text-white rounded self-end transition-all duration-300 hover:bg-secondary active:bg-primary"
    >
      {text}
    </button>
  );
};

export default Button;
