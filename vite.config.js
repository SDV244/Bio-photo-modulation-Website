import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products/index.html'),
                science: resolve(__dirname, 'science/index.html'),
                sports: resolve(__dirname, 'sports/index.html'),
                applications: resolve(__dirname, 'sports/applications.html'),
                contact: resolve(__dirname, 'contact/index.html'),
            },
        },
    },
})
