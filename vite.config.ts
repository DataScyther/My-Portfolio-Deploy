import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: "/",
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
    cors: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: true,
    cors: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
