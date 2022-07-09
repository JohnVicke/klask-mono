import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/MainLayout";

export const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout headTitle="Klask Leaderboard">
      <div className="h-full w-full flex flex-col justify-center align-center">
        <h1>klask leaderboard</h1>
      </div>
    </MainLayout>
  );
};
