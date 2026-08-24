import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: false
  },

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',

    // Warn on chunks > 600 KB
    chunkSizeWarningLimit: 600,

    // Split CSS per chunk for better caching
    cssCodeSplit: true,

    // Rollup manual chunk splitting for optimal caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React ecosystem — small, changes rarely
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom') || id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }
          // Three.js — large, only used on /treatments page
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          // EmailJS — only used on /appointment
          if (id.includes('node_modules/@emailjs')) {
            return 'vendor-emailjs';
          }
          // Lucide icons
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
        },
        // Content-hash asset file names for long-term caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },

  // Prevent Vite from pre-bundling three.js (it's lazy-loaded)
  optimizeDeps: {
    exclude: ['three']
  }
});
