import Head from "next/head";
import React from "react";
import { Footer } from "../footer/Footer";

interface MainLayoutProps {
  headTitle?: string;
}

export const MainLayout = ({
  headTitle,
  children,
}: React.PropsWithChildren<MainLayoutProps>) => (
  <div className="flex min-h-screen flex-col items-center justify-between py-2">
    <div className="conatiner max-w-lg w-full">
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);
