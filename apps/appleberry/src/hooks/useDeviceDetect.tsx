import { useWindowSize } from "react-use";

type MediaQueryProps = {
  width: number;
  type?: "min" | "max";
};

export const useMediaQuery = ({ width, type = "min" }: MediaQueryProps) => {
  const { width: windowWidth } = useWindowSize();
  return type === "min" ? width <= windowWidth : width >= windowWidth;
};
