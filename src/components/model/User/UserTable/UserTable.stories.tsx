import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockUserList } from "@/mocks/User";

import { UserTable } from "./UserTable";

export default {
  title: "Model/User/UserTable",
  component: UserTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UserTable>;

const Template: ComponentStory<typeof UserTable> = (args) => (
  <UserTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  users: mockUserList,
};
