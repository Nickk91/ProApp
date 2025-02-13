import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Custom manual chunking
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Bundle all node_modules dependencies into one 'vendor' chunk
            return "vendor";
          }
        },
      },
    },
    // Optionally, adjust the warning limit for large chunks
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 KB to avoid warnings for larger chunks
  },
});
