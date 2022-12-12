# Description

This is a test project assessment. It showcases simple page with navigation, toolbox and canvas components.
It allows a user to search for images, drag & drop them from toolbox to canvas, manipulate (click & rotate, scale). Also toolbox allows user to clear canvas or export (download) it as PNG. Canvas preserves its state on reload.
Additionally you can share canvas state (Share button) which copies url into clipboard.

## Installation

This project uses pnpm as a package manager.

### Install dependencies

```bash
pnpm i
```

### Run dev

```bash
pnpm dev
```

### Build project

```bash
pnpm build
```

### Preview or serve built project

```bash
pnpm serve
```

## Used stack

- react
- redux
- tailwindcss
- konva
- redux-saga for effects
- redux-chill for easy state management
- vite

## Project guidelines and structure

- file/folder names should follow snake-case pattern
- src level folder should be modules (tsconfig paths & vite config)
  - exception is assets folder

### File structure:

Self explanatory folders are skipped.
Sources folder is broken down into modules and logical parts for better maintenance and further development.

- `app` folder is a logical entry point for application. Serves as wrapper for different sorts of providers/contexts etc.
- `core` folder should hold reusable modules, shared types, ui kit, services etc.
- `pages` folder holds pages available in tree-like way.
- `redux` folder has a redux config and logically structured in `stores`
- `router` folder serves as a page formation point.

## TODO's

1. Add prettier/eslint, pre-commit hooks and editor config.
2. Come up with better centralised way of using Konva stage, layer and other entities.
3. Add error-handler component
4. Add tests
5. Improve environment management (add typings for it)
6. Configure tailwind with for better classes usage (default hover, disabled states etc)

## License

[MIT]
