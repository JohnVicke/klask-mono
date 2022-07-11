import React from "react";
import { Icon, IconProps } from "./Icon";

type ArrowIconProps = IconProps & {
  direction: "up" | "down " | "left" | "right";
};

export const ArrowIcon = ({ direction, ...props }: ArrowIconProps) => (
  <Icon {...props} icon={`arrow-${direction}-s-fill`} />
);
