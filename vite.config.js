import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/secretword/',  // Corrigir para o subdiretório do GitHub Pages
  plugins: [react()],
})
