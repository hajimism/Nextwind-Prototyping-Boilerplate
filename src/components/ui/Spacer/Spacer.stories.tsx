import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Spacer } from "./index"

export default {
  title: "UI/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 36,
}
