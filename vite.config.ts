import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindscss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindscss(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
