import React from "react";
import { Avatar, AvatarProps } from "./Avatar";

type TopThree = "FIRST" | "SECOND" | "THIRD";

const colorMap = {
  FIRST: "yellow",
  SECOND: "green",
  THIRD: "blue",
};

const getPlacementColor = (placement: TopThree) => colorMap[placement];

type LeaderboardAvatarProps = AvatarProps & {
  imageUrl?: string;
  placement: TopThree;
};

export const LeaderboardAvatar = ({
  imageUrl,
  name,
  hideName = false,
  placement,
}: LeaderboardAvatarProps) => (
  <div className="w-[150] h-[150]">
    <Avatar hideName={hideName} name={name} imageUrl={imageUrl} />
  </div>
);
