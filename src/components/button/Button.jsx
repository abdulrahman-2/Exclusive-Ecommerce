import React from "react";

const Button = ({ name, style, ...rest }) => {
  return (
    <button
      className={`py-2 px-4 font-[500] md:py-3 md:px-5 block rounded-md ${style}`}
      {...rest}
    >
      {name}
    </button>
  );
};

export default Button;
