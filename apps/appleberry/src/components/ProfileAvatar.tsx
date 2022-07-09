import React from "react";
import { ProfileIcon } from "../icons/ProfileIcon";

interface ProfileAvatarProps {}

export const ProfileAvatar = ({}: ProfileAvatarProps) => {
  const loggedIn = false;
  if (!loggedIn) {
    return <ProfileIcon />;
  }
  return <div>logged in!</div>;
};
