import React from "react";

const Button = ({ name, style }) => {
  return (
    <button
      className={`bg-[#DB4444] py-4 px-12 block rounded-md text-white ${style}`}
    >
      {name}
    </button>
  );
};

export default Button;
