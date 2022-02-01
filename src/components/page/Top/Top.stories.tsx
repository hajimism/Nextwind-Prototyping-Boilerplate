import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopPageView } from "./View";

export default {
  title: "Page/Top",
  component: TopPageView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TopPageView>;

const Small: ComponentStory<typeof TopPageView> = (args) => (
  <div className="max-w-sm">
    <TopPageView {...args} />
  </div>
);

const Medium: ComponentStory<typeof TopPageView> = (args) => (
  <div className="max-w-md">
    <TopPageView {...args} />
  </div>
);

const Large: ComponentStory<typeof TopPageView> = (args) => (
  <div className="max-w-6xl">
    <TopPageView {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {};

export const Tablet = Medium.bind({});
Tablet.args = {};

export const Desktop = Large.bind({});
Desktop.args = {};
