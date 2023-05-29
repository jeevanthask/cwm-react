import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //u can use string as necessary
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
