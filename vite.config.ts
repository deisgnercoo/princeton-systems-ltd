import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Served from https://developerdesinger.github.io/princeton-systems-ltd/
  // Local dev stays at "/" so `npm run dev` is unaffected.
  base: command === 'build' ? '/princeton-systems-ltd/' : '/',
}))
