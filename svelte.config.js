import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: ''
        },
        appDir: '_app',
        files: {
            assets: 'static'
        }
    },
    preprocess: vitePreprocess()
};

export default config;