import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/MainLayout";

import { ArrowIcon } from "../../icons/ArrowIcon";
import { LeaderboardIcon } from "../../icons/LeaderboardIcon";

export const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout headTitle="Klask Leaderboard">
      <div className="w-full h-full flex justify-center ">
        <div className="max-w-3xl relative pt-24">
          <div className="ml-6">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
              Keep track of who the office{" "}
              <span className="text-primary">Klask</span> champion is!
            </h1>
            <p className="text-lg text-center mt-6">
              Klask leaderboard saves stats for each player. Who is the most
              clumsy, who has most goals, and who&apos;s strategy is it to use
              warts?{" "}
            </p>
            <div className="flex justify-center items-center mt-10 mr-6">
              <button
                onClick={() => router.push("leaderboard/1")}
                type="button"
                className="btn btn-primary"
              >
                go to leaderboard
                <LeaderboardIcon className="font-normal ml-2" size="md" />
              </button>
              <button
                onClick={() => router.push("/game/join-game")}
                type="button"
                className="btn btn-primary ml-4"
              >
                get started
                <ArrowIcon size="md" direction="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
