import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "my-react-sdk",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
