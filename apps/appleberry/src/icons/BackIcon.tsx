import React from "react";
import { Icon, IconProps } from "./Icon";

export const BackIcon = (props: Pick<IconProps, "size">) => (
  <Icon {...props} icon="arrow-left-s" />
);
