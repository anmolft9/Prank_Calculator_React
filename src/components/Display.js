import React from "react";

export const Display = ({ str }) => {
  return (
    <input
      className="Main"
      type="string"
      placeholder="0"
      value={str || "0"}
    ></input>
  );
};
