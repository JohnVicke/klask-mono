import React from "react";
import { ProfileIcon } from "../icons/ProfileIcon";

export const ProfileAvatar = () => {
  const loggedIn = false;
  if (!loggedIn) {
    return <ProfileIcon />;
  }
  return <div>logged in!</div>;
};
