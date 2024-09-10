import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // Adjust if necessary
    rollupOptions: {
      // external: ['three-stdlib'] // Exclude problematic library
    }
  }
})
