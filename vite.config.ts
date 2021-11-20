import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  optimizeDeps: {
    include: ["cable_ready"]
  },
  plugins: [
    RubyPlugin(),
  ],
})
