import * as React from "react";

export type ButtonProps = {
  primary: boolean;
  label: string;
};

export const Button = ({ primary, label }: ButtonProps) => (
  <button type="button" className="bg-blue-500 hover:bg-blue-700">
    {label} {primary}
  </button>
);
