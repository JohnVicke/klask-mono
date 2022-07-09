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
  <div>
    <Head>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="conatiner max-w-lg w-full h-full">
      <main className="flex-1">{children}</main>
    </div>
    <Footer />
  </div>
);
