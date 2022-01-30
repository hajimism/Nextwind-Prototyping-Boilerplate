import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopPageView } from "./View";

export default {
  title: "Page/Top",
  component: TopPageView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TopPageView>;

const Template: ComponentStory<typeof TopPageView> = (args) => (
  <TopPageView {...args} />
);

export const Default = Template.bind({});
