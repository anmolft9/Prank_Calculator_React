import React from "react";

export const Display = ({ str, isPrank }) => {
  const clsNm = isPrank ? "Main prank" : "Main";
  return (
    <input className={clsNm} type="string" placeholder="0" value={str || "0"} />
  );
};
