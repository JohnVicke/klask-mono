import React from "react";
import { getInitials } from "../utils/getInitials";

export type AvatarProps = {
  name: string;
  hideName: boolean;
  imageUrl?: string;
};

export const Avatar = ({ imageUrl, hideName, name }: AvatarProps) => (
  <div className="flex flex-col justify-center items-center">
    {imageUrl ? (
      <img
        className="border-4 rounded-full"
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
      />
    ) : (
      <div>{getInitials(name)}</div>
    )}
    {!hideName && <div>{name}</div>}
  </div>
);
