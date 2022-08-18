// Input Component
import React from "react";

const Input = ({ handleSetInput }) => {
  return <>
  
  <form>
    <span className="input-box">
      <span className="label">LOCATION</span>
      <input
        type="text"
        onChange={(event) => handleSetInput(event.target.value)}
      />
    </span>
  </form>
  </>;
};

export default Input;
