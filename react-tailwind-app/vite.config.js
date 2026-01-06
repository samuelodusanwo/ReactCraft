import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: ['**/*.js', '**/*.jsx'] // This allows JSX in .js files
    })
  ],
})