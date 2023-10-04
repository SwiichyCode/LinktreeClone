import React from "react";

type Props = {
  children: React.ReactNode;
};

export const FormContainer = ({ children }: Props) => {
  return <div className="flex flex-col flex-grow">{children}</div>;
};
