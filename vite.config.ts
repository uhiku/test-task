import { defineConfig } from "vitest/config";
import { resolve } from "path";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@app": resolve("src/app"),
      "@redux": resolve("src/redux"),
      "@router": resolve("src/router"),
      "@pages": resolve("src/pages"),
      "@core": resolve("src/core"),
      "@assets": resolve("assets"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});

export default config;
