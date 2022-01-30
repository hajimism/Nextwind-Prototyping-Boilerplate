# Nextwind Prototyping Boilerplate

A boilerplate for prototyping with Next.js & Tailwind CSS, which would save your time a lot!

This project is made with...

- Next.js
- TypeScript
- Tailwind CSS
- Storybook
- husy & lint-staged
- scaffdog

## Sammary of Strength

- Tailwind & Storybook are already set!
- Nicely structured folders, which would be familier with OOUI prototyping
- Useful ESlint plugins and rules
  - Tailwind className sort
  - import order
  - unused import deletion
- pre-commit hook is also set!
- Scaffdog generates a nice component folder template!

## Usage

You can quickly start development with these commands.

```zsh
# package install
yarn

# start localhost
yarn dev

# start storybook
yarn sb
```

## Structure

I assume this boilerplate being used in OOUI-aware prototyping. So you would develop like this.

1. Define the type of model (or Object in OOUI) is `@/types` (`@/` means `/src/` here)
2. Create a mock data that follows the model
3. Create UI components under `@/components/model`

```zsh
.
├── public
└── src
    ├── components
    │   ├── model # components related to models
    │   ├── page # components which represents page
    │   └── ui # components indifferent to models
    ├── mocks # mock data related to models
    ├── pages
    │   └── api
    ├── styles
    └── types # type definition of models
```
