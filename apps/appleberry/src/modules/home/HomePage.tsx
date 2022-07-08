import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/MainLayout";

export const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout headTitle="Klask Leaderboard">
      <button
        onClick={() => router.push("leaderboard/1")}
        type="button"
        className="btn btn-primary"
      >
        go to leaderboard
      </button>
    </MainLayout>
  );
};
