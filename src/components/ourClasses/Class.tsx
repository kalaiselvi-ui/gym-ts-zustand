import { ClassesType } from "@/shared/types";
import React from "react";

const Class = ({ name, desc, image }: ClassesType) => {
  const overlayStyle = `p-5 absolute z-30 flex h-[380px] w-[450px] flex flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyle}>
        <p className="text-2xl ">{name}</p>
        <p className="mt-5">{desc}</p>
      </div>
      <img src={`${image}`} alt="" />
    </li>
  );
};

export default Class;
