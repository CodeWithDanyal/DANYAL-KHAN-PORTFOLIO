import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // This sets the warning limit to 1MB (1000KB)
  },
   plugins: [react()],
})
