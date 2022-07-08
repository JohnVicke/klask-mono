import React from "react";

export type AvatarProps = {
  imageUrl?: string;
  initials?: string;
};

export const Avatar = ({ imageUrl, initials }: AvatarProps) => {
  if (!imageUrl) {
    return <div>{initials}</div>;
  }
  return <img className="rounded-full" src={imageUrl} alt="avatar" />;
};
