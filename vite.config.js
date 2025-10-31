import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import process from 'process'

const isProd = process.env.NODE_ENV === 'production'

function getHttpsConfig() {
    const keyPath = '/certs/privkey.pem'
    const certPath = '/certs/fullchain.pem'

    if (isProd && fs.existsSync(keyPath) && fs.existsSync(certPath)) {
        return {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
        }
    }

    return false
}

export default defineConfig({
    plugins: [react(), tailwindcss()],
    preview: {
        allowedHosts: ['jacobgomezhansen.net'],
        https: getHttpsConfig(),
    },
})
