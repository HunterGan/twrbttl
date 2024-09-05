import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    esbuild: {
      loader: 'tsx'
    },
    server: {
      host: true,
      watch: {
        usePolling: true
      },
      port: Number.parseInt(process.env.PORT) || 3000
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      svgr()
    ],
  });
}
