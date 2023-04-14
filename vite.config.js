import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myPortfoliov2/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.PNG']
})
