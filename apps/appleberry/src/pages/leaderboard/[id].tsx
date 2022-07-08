import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { LeaderboardPage } from "../../modules/leaderboard/LeaderboardPage";
import type { Leaderboard } from "../../types/Leaderboard";

export interface LeaderboardProps {
  leaderboard: Leaderboard;
}

const getLeaderboardData = (id: string): Leaderboard => ({
  id,
  name: "Game 1",
  description: "This is a game",
  createdAt: "2020-01-01",
  updatedAt: "2020-01-01",
  entries: [
    {
      id: "1",
      Tier: "A",
      Klaskname: "JohnVicke",
      Rating: "1242",
    },
    {
      Klaskname: "JohnVicke",
      id: "2",
      Tier: "A",
      Rating: "1242",
    },
  ],
});

const LeaderboardNextRoute: React.FC<LeaderboardProps> = ({
  leaderboard,
}: LeaderboardProps) => <LeaderboardPage leaderboard={leaderboard} />;

export default LeaderboardNextRoute;

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  LeaderboardProps,
  Params
> = async context => {
  const params = context.params!;
  const leaderboard = getLeaderboardData(params.id);
  return {
    props: { leaderboard },
  };
};
