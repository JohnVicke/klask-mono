import React from "react";

const remixIconSizeChart = {
  sm: "sm",
  md: "lg",
  lg: "2x",
};

export interface IconProps {
  size?: "sm" | "md" | "lg";
  icon: string;
}

export const Icon = ({
  size = "sm",
  icon,
}: React.PropsWithChildren<IconProps>) => (
  <i className={`ri-${icon}-fill ri-${remixIconSizeChart[size]}`} />
);
