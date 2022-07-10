import React from "react";
import { useRouter } from "next/router";
import { Container } from "../../components/Container";
import { ArrowIcon } from "../../icons/ArrowIcon";
import { Leaderboard } from "../../types/Leaderboard";
import { MainLayout } from "../layouts/MainLayout";
import { LeaderboardTable } from "./LeaderboardTable";

interface LeaderboardPageProps {
  leaderboard: Leaderboard;
}

export const LeaderboardPage = ({ leaderboard }: LeaderboardPageProps) => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <MainLayout>
      <Container>
        <button type="button" className="btn btn-ghost" onClick={goBack}>
          <div className="flex items-center ml-[-10px]">
            <ArrowIcon size="md" direction="left" />
            <h1>Go back</h1>
          </div>
        </button>
      </Container>
      <LeaderboardTable rows={leaderboard.entries} />
    </MainLayout>
  );
};
