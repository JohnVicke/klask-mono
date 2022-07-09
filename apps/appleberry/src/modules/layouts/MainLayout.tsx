import Head from "next/head";
import React, { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BottomNav } from "./navigation/BottomNav";

interface MainLayoutProps {
  headTitle?: string;
}

export const MainLayout = ({
  headTitle,
  children,
}: React.PropsWithChildren<MainLayoutProps>) => {
  const [mounted, setMounted] = React.useState(false);

  const isMobile = useMediaQuery(425);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="conatiner max-w-lg w-full h-full p-4">
        <main className="flex-1">{children}</main>
      </div>
      {isMobile ? <BottomNav /> : <Footer />}
    </div>
  );
};
