import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}

