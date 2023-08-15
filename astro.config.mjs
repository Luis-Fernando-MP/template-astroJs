import { defineConfig } from 'astro/config'
import { resolve } from 'path'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    open: true, 
    cors: true
  },
  vite: {
    alias: {
      '@/*': resolve(process.cwd(), './src/*'),
      'sass/*': resolve(process.cwd(), './src/sass/*')
    }
  },
  integrations: [react()]
})
