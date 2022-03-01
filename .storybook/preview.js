import "../src/styles/globals.css"
import * as NextImage from "next/image"
import { initialize, mswDecorator } from "msw-storybook-addon"
import { rest } from "msw"

import { withConsole } from "@storybook/addon-console"
import { addDecorator } from "@storybook/react"

// Initialize MSW
initialize()

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  msw: {
    handlers: [
      // example
      rest.get("/hello", (req, res, ctx) => {
        return res(
          ctx.json({
            name: "John Doe",
          })
        )
      }),
    ],
  },
}

export const decorators = [mswDecorator]
