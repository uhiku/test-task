import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@app": resolve("src/app"),
      "@redux": resolve("src/redux"),
      "@router": resolve("src/router"),
    },
  },
});
