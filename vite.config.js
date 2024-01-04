import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
	// location of env files
	const ENV_DIR = './env';

	const env = loadEnv(mode, ENV_DIR, 'VITE_');
	const PORT = env.VITE_PORT || 3000;

	return {
		server: {
			port: +PORT,
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		envDir: ENV_DIR,
	};
});
