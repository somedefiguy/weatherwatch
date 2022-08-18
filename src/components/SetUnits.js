// SetUnits Component
import React from "react";

const SetUnits = () => {
  return (
    <>
      <div className="set-units">
        <label>UNITS</label>
        <select>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </div>
    </>
  );
};

export default SetUnits;
