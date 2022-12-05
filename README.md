# Vite + React + TS + ESLint x airbnb + Prettier

A React starter project with Vite React, Typescript, ESLint with the airbnb config and Prettier.

![Vite + React + TS + ESLint x airbnb + Prettier](/resources/screen1.png)

You can find more about these in the following links : [Vite](https://vitejs.dev), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [Prettier](https://prettier.io/).

## 💾 Installation

Clone the repo in your project folder and run `npm install`

## 🚀 Start - Run the project

After the installation of the packages run `npm run dev`

## 💻 Vscode Config

1. Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for vs code.
2. Make Sure Both are enabled and all packages are installed.
3. Enable 'formatOnSave' in vs code config
   ![Format on Save](/resources/screen2.png)
4. Enjoy coding

## 🔧 Prettier config

ESLint and Prettier are synchronized in this project, so if you change the configuration of Prettier, ESLint follow and applies the new rules coming from prettier.

Prettier config file : `.prettierrc.cjs`

The default options are :

```
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 120,
};
```

Learn more about [Prettier options 📜](https://prettier.io/docs/en/options.html)

Made with ❤️ by Me, inspired by [this video 🎬](https://www.youtube.com/watch?v=cchqeWY0Nak)
