import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ExLink } from "./index";

export default {
  title: "UI/ExLink",
  component: ExLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ExLink>;

const Small: ComponentStory<typeof ExLink> = (args) => (
  <div className="max-w-sm">
    <ExLink {...args} />
  </div>
);

const Medium: ComponentStory<typeof ExLink> = (args) => (
  <div className="max-w-md">
    <ExLink {...args} />
  </div>
);

const Large: ComponentStory<typeof ExLink> = (args) => (
  <div className="max-w-6xl">
    <ExLink {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
  href: "https://github.com/",
  children: "GitHub",
};

export const Tablet = Medium.bind({});
Tablet.args = {
  href: "https://github.com/",
  children: "GitHub",
};

export const Desktop = Large.bind({});
Desktop.args = {
  href: "https://github.com/",
  children: "GitHub",
};
