import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js', // Entry point for client-side build
      ssr: 'resources/js/ssr.js', // Entry point for SSR build
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  ssr: {
    noExternal: ['@inertiajs/server', 'vue'], // Ensure these packages are bundled for SSR
  },
  build: {
    manifest: true, // Generate manifest file for client-side build
    ssrManifest: true, // Generate SSR manifest file
  },
});