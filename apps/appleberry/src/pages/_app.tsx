import React from "react";

import type { AppProps } from "next/app";
import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";

const AppleBerry = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default AppleBerry;
