import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'logo192.png'],
    manifest: {
      name: 'Your App',
      short_name: 'App',
      start_url: '/ws01_module_c/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'logo192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),
  ],
  build: {
    assetsDir: "assets"
  },
  base: '/ws01_module_c/'
})
