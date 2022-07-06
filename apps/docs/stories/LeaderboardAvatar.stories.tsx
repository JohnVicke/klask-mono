import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LeaderboardAvatar } from "ui/components/LeaderboardAvatar";

import avatarImage from "./assets/avatar.png";
import "../index.css";

export default {
  title: "Example/LeaderboardAvatar",
  component: LeaderboardAvatar,
} as ComponentMeta<typeof LeaderboardAvatar>;

const Template: ComponentStory<typeof LeaderboardAvatar> = args => (
  <LeaderboardAvatar {...args} />
);

export const First = Template.bind({});
First.args = {
  imageUrl: avatarImage,
  name: "Grand Master",
  placement: "FIRST",
};
