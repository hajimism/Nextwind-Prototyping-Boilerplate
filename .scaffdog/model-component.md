---
name: "model-component"
root: "."
output: "**/*"
ignore: []
questions:
  model: "Which model?"
  component: "Plese enter component name"
---

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/index.ts`

```ts
import { {{ inputs.component | pascal }} } from "./{{ inputs.component | pascal }}";
export { {{ inputs.component | pascal }} };
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.tsx`

```tsx
import { VFC } from "react";

import { {{ inputs.model | pascal }}Props, {{ inputs.model | pascal }}ListProps } from "@/types/{{ inputs.model | pascal }}";

// TODO: You have to delete unnecessary one of SingleProp ver or ListProp ver

// Single Prop ver
export const {{ inputs.component | pascal }}: VFC<{{ inputs.model | pascal }}Props> = ({ {{ inputs.model | camel }} }) => {
  return <></>;
};

// List Prop ver
export const {{ inputs.component | pascal }}: VFC<{{ inputs.model | pascal }}ListProps> = ({ {{ inputs.model | camel }}s }) => {
  return <></>;
};
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mock{{ inputs.model | pascal }}, mock{{ inputs.model | pascal }}List } from "@/mocks/{{ inputs.model | pascal }}";

import { {{ inputs.component | pascal }} } from "./{{ inputs.component | pascal }}";

export default {
  title: "Model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}",
  component: {{ inputs.component | pascal }},
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof {{ inputs.component | pascal }}>;

// TODO: You have to delete unnecessary one of SingleProp ver or ListProp ver

// SingleProp ver
const Small: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-sm">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

const Medium: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-md">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

const Large: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-6xl">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
   {{ inputs.component | camel }}: mock{{ inputs.component | pascal }},
};

export const Tablet = Medium.bind({});
Tablet.args = {
   {{ inputs.component | camel }}: mock{{ inputs.component | pascal }},
};

export const Desktop = Large.bind({});
Desktop.args = {
   {{ inputs.component | camel }}: mock{{ inputs.component | pascal }},
};


// ListProp ver
const Small: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-sm">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

const Medium: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-md">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

const Large: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <div className="max-w-6xl">
    <{{ inputs.component | pascal }} {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
   {{ inputs.component | camel }}s: mock{{ inputs.component | pascal }}List,
};

export const Tablet = Medium.bind({});
Tablet.args = {
   {{ inputs.component | camel }}s: mock{{ inputs.component | pascal }}List,
};

export const Desktop = Large.bind({});
Desktop.args = {
   {{ inputs.component | camel }}s: mock{{ inputs.component | pascal }}Lists,
};
```
