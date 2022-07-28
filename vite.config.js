import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import * as path from "node:path"
import copy from 'rollup-plugin-copy';

const vitePath = `public/shoelace/assets`

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  clearScreen: false,
  server: {
    fs: {
      allow: ["../../../../oss/konnors-personal-components"]
    }
  },
  plugins: [
    RubyPlugin(),
    copy({
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets/icons'),
          dest: path.resolve(__dirname, vitePath)
        }
      ],
      hook: 'buildStart'
    }),
    FullReload(['config/routes.rb', 'app/views/**/*', 'app/reflexes/**/*', 'app/helpers/**/*'], {delay: 300})
  ],
})
