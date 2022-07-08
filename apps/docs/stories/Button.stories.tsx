import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";

import { Button } from "ui/components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "ghost",
};
