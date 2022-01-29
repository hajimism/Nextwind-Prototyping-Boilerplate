import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Top } from "./Top";

export default {
  title: "UI/Top",
  component: Top,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Top>;

const Template: ComponentStory<typeof Top> = (args) => <Top {...args} />;

export const Default = Template.bind({});
