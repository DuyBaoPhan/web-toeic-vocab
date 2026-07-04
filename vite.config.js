import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'VocaTOEIC',
                short_name: 'VocaTOEIC',
                start_url: '/',
                display: 'standalone',
                theme_color: '#10b981',
                background_color: '#ffffff',
                icons: [{ src: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' }],
            },
            workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] },
        }),
    ],
    test: { environment: 'jsdom', globals: true },
});
