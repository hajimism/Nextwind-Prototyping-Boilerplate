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

const Small: ComponentStory<typeof UserTable> = (args) => (
  <div className="max-w-sm">
    <UserTable {...args} />
  </div>
);

const Medium: ComponentStory<typeof UserTable> = (args) => (
  <div className="max-w-md">
    <UserTable {...args} />
  </div>
);

const Large: ComponentStory<typeof UserTable> = (args) => (
  <div className="max-w-6xl">
    <UserTable {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
  users: mockUserList,
};

export const Tablet = Medium.bind({});
Tablet.args = {
  users: mockUserList,
};

export const Desktop = Large.bind({});
Desktop.args = {
  users: mockUserList,
};
