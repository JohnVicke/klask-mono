import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/MainLayout";

export const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout headTitle="Klask Leaderboard">
      <div className="h-full w-full flex flex-col justify-center align-center">
        <button
          onClick={() => router.push("leaderboard/1")}
          type="button"
          className="btn btn-primary"
        >
          go to leaderboard
        </button>
        <button
          onClick={() => router.push("/game/join-game")}
          type="button"
          className="btn btn-primary mt-4"
        >
          join new game
        </button>
      </div>
    </MainLayout>
  );
};
