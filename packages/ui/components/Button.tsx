import * as React from "react";

export type ButtonTypes = "primary" | "secondary" | "link" | "ghost";

export type ButtonProps = {
  type?: ButtonTypes;
  onClick: () => void;
};

export const Button = ({
  type = "primary",
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  const className = `btn btn-${type}`;
  console.log(className);
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
