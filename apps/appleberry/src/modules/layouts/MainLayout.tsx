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
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="conatiner max-w-lg w-full px-4">{children}</div>

    <div className="divider" />
    <Footer />
  </div>
);
