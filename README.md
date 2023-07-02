# CSS Architecture workshop repository

This repository holds the implementation of some React components (`Notification`, `Button` and `CollapsiblePanel`) in an imaginary Design System named **Nebula**.

These components are implemented with different approaches explained in the workshop:

1. _Vanilla_: Own React components styled with [CSS modules](https://github.com/css-modules/css-modules). We just use the classnames library to help applying conditional styles.
2. _CSS-in-JS_: Own React components styles with [macaron](https://macaron.js.org/) library. Styles live in the Javasript context.
3. _Ay11 components: Third party components (from [RaduxUI](https://www.radix-ui.com/)) styles with an Atomic CSS library ([tailwindcss](https://tailwindcss.com/)) using the [tailwind-variants](https://www.tailwind-variants.org/) library for better styles management.

## Running locally

This repo was developed with this versions:
* NodeJS: `16.13.0`
* NPM: `9.6.7`

After cloning this repository you'll need to install its dependencies:
```bash
# npm install
```

Bear in mind we're using Storybook in this repo to develop and check the components locally so, after installing the dependencies, you need to start it with this command:
```bash
# npm run storybook
```

A new browser tab should automatically be opened with this URL: http://localhost:6006

Use the sidebar navigation on the left to access the different versions of the components (they all look and behave the same).

## Source code structure

Inside the `/src/components` directory you will find three sub-directories with the implementation of the three mentioned components with the different approaches:
* a11y-components: [RadixUI](https://www.radix-ui.com/) + [TailwindCSS](https://tailwindcss.com/) + [Tailwind-variants](https://www.tailwind-variants.org/)
* css-in-js: [Macaron](https://macaron.js.org/)
* vanilla: [CSS Modules](https://github.com/css-modules/css-modules)
