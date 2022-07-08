import React from "react";
import { getInitials } from "../utils/getInitials";
import { Avatar, AvatarProps } from "./Avatar";

type TopThree = "FIRST" | "SECOND" | "THIRD";

const colorMap = {
  FIRST: "yellow",
  SECOND: "green",
  THIRD: "blue",
};

const widthMap = {
  FIRST: "150px",
  SECOND: "100px",
  THIRD: "100px",
};

const getPlacementColor = (placement: TopThree) => colorMap[placement];
const getPlacementWidth = (placement: TopThree) => widthMap[placement];

type LeaderboardAvatarProps = AvatarProps & {
  name: string;
  placement: TopThree;
  hideName: boolean;
  imageUrl?: string;
};

export const LeaderboardAvatar = ({
  imageUrl,
  name,
  hideName = false,
  placement,
}: LeaderboardAvatarProps) => {
  const diameter = getPlacementWidth(placement);
  const color = getPlacementColor(placement);
  console.log(color);

  return (
    <div className="flex-col items-center content-center ">
      <div
        className={`w-[${diameter}] h-[${diameter}] rounded-full border-4 border-green-300`}
      >
        <Avatar imageUrl={imageUrl} initials={getInitials(name)} />
      </div>
      {!hideName && <p>{name}</p>}
    </div>
  );
};
