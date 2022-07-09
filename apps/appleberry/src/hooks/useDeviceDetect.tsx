export const useMobileDetect = () => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  const isMobile = () => !!userAgent.match(/mobile/i);
  return { isMobile };
};
