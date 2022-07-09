import Head from "next/head";
import React from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navigation/Navbar";

interface MainLayoutProps {
  headTitle?: string;
}

export const MainLayout = ({
  headTitle,
  children,
}: React.PropsWithChildren<MainLayoutProps>) => (
  <div className="min-h-screen h-full">
    <Head>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="container w-full h-full max-w-screen-xl m-auto">
      {children}
    </main>
    <Footer />
  </div>
);
