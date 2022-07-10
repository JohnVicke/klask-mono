import { useWindowSize } from "react-use";

export const useMediaQuery = () => {
  const isMobile = useWindowSize().width < 768;
  const isTablet = useWindowSize().width < 1024;
  const isDesktop = useWindowSize().width >= 1024;
  return { isMobile, isTablet, isDesktop };
};
