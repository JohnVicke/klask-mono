export type LeaderboardHead = "Klaskname" | "Tier" | "Rating" | "id";

export type LeaderboardEntry = {
  [key in LeaderboardHead]: string;
};

export interface Leaderboard {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  entries: LeaderboardEntry[];
}
