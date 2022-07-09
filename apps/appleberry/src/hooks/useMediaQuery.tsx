import useWindowSize from "react-use/lib/useWindowSize";

export const useMediaQuery = (queryWidth: number) => {
  const { width } = useWindowSize();
  return queryWidth >= width;
};
