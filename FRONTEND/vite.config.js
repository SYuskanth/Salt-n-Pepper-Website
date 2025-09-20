import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

  server: {
    // Add this 'server' configuration
    allowedHosts: [
      '70e328b1d9c4.ngrok-free.app' // Add your ngrok URL here
    ]
  }
})
