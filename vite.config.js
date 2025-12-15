import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Orbitals - 3D Atomic Visualizer",
        short_name: "Orbitals",
        description: "A simple atomic structure visualizer for exploring 3D atomic orbitals and electron configurations",
        theme_color: "#ffffff",
        background_color: "#f1f5f9",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
          {
            src: "/logo-216x216.png",
            sizes: "216x216",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        categories: ["education", "productivity"],
        shortcuts: [
          {
            name: "View Periodic Table",
            short_name: "Periodic Table",
            description: "View the periodic table of elements",
            url: "/?view=periodic",
            icons: [
              {
                src: "/logo-216x216.png",
                sizes: "216x216",
              },
            ],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
      },
    }),
  ],
});
