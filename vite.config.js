import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['./Satisfy-Regular.ttf','./scroll.png'], 
      manifest: {
        name:'my-ttrpg-generators',
        short_name: 'generators'
      },
      devOptions: {
        enabled: true,
      }
    })
  ],
  build: {
    target: 'es2021'
  }
});
