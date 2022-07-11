import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import { initApp } from "../modules/firebase/initFirebase";

initApp();

const AppleBerry = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default AppleBerry;
