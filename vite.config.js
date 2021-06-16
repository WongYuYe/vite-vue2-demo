import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
});
