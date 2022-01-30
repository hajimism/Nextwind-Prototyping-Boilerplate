import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutPageView } from "./View";

export default {
  title: "Page/About",
  component: AboutPageView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AboutPageView>;

const Template: ComponentStory<typeof AboutPageView> = (args) => (
  <AboutPageView {...args} />
);

export const Default = Template.bind({});