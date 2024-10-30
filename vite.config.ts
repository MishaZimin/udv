import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      workbox: {
        disableDevLogs: true,
        runtimeCaching: [],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "udv",
        short_name: "udv",
        description: "udv",
        theme_color: "#ffffff",
        icons: [
          {
            src: "src/shared/assets/svgs/Logo2.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/shared/assets/svgs/Logo2.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
