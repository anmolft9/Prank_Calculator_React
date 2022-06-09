import React from "react";
import { Button } from "./Button";
import "../App.css";

export const ButtonArea = () => {
  const obj = [
    {
      label: "1",
      className: "item-1",
    },
    {
      label: "2",
      className: "item-2",
    },
    {
      label: "3",
      className: "item-3",
    },
    {
      label: "4",
      className: "item-4",
    },
    {
      label: "5",
      className: "item-5",
    },
    {
      label: "6",
      className: "item-6",
    },
    {
      label: "7",
      className: "item-7",
    },
    {
      label: "8",
      className: "item-8",
    },
    {
      label: "9",
      className: "item-9",
    },
    {
      label: "0",
      className: "item-10",
    },
    {
      label: "+",
      className: "item-11",
    },
    {
      label: "=",
      className: "item-12",
    },
    {
      label: "*",
      className: "item-13",
    },
    {
      label: "C",
      className: "item-14",
    },
    {
      label: "^",
      className: "item-15",
    },
    {
      label: "AC",
      className: "item-16",
    },
    {
      label: "Off",
      className: "item-17",
    },
    {
      label: "/",
      className: "item-18",
    },
    {
      label: ".",
      className: "item-19",
    },
    {
      label: "-",
      className: "item-20",
    },
  ];

  return obj.map((item, i) => {
    // return <Button key={i} className={item.className} label={item.label} />;
    return <Button key={i} {...item} />; ///other way
  });
};
