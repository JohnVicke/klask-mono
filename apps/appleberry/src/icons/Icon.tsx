import React from "react";

const remixIconSizeChart = {
  sm: "sm",
  md: "lg",
  lg: "2x",
};

interface BaseIconProps {
  size?: "sm" | "md" | "lg";
  icon: string;
  className?: string;
}

export type IconProps = Omit<BaseIconProps, "icon">;

export const Icon = ({
  size = "sm",
  className,
  icon,
}: React.PropsWithChildren<BaseIconProps>) => (
  <i className={`ri-${icon} ri-${remixIconSizeChart[size]} ${className}`} />
);
