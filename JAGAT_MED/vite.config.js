import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/jagat_med_web/",   // 👈 apne GitHub repo ka naam
})
