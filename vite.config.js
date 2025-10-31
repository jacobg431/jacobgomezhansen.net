import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import process from 'process'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    preview: {
        allowedHosts: ['jacobgomezhansen.net'],
        https: isProd
            ? {
                  key: fs.readFileSync('/certs/privkey.pem'),
                  cert: fs.readFileSync('/certs/fullchain.pem'),
              }
            : false,
    },
})
