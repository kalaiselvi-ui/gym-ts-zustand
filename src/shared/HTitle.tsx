import React from "react";

type Props = {
  children: React.ReactNode;
};

const HTitle = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  );
};

export default HTitle;
