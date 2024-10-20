/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    base: './', // Cambia la base para usar rutas relativas
    build: {
        outDir: 'dist', // Carpeta de salida para el build
        assetsDir: 'assets', // Carpeta de activos
    },
});
