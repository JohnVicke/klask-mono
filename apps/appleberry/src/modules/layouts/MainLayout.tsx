import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navigation/Navbar";

interface MainLayoutProps {
  headTitle?: string;
}

export const MainLayout = ({
  headTitle = "Kaffeklask",
  children,
}: React.PropsWithChildren<MainLayoutProps>) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  return (
    <div className="h-full">
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <main className="container w-full h-[calc(100vh_-_210px)] max-w-screen-xl m-auto px-4">
          {children}
        </main>
        <Footer />
      </Navbar>
    </div>
  );
};
