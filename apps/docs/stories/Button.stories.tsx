import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";

import { Button } from "ui/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
};
