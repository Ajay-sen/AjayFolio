import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // Adjust if necessary
    rollupOptions: {
<<<<<<< HEAD
      // external: ['three-stdlib'] // Exclude problematic library
=======
      external: ['three-stdlib'] // Exclude problematic library
>>>>>>> 0e43ee6f53f5342dc1f7681fcee08deb06ce4b2b
    }
  }
})
