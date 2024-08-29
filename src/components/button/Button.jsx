import React from "react";

const Button = ({ name, style, ...rest }) => {
  return (
    <button className={`py-4 px-12 block rounded-md ${style}`} {...rest}>
      {name}
    </button>
  );
};

export default Button;
