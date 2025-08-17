import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/My-Portfolio-Deploy/",
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
  plugins: [
    react(),
    mode === 'development' && process.env.ENABLE_TAGGER === 'true' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
