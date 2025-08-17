import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: command === 'build' ? '/' : '/',
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
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
