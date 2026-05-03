import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDirs: resolve(__dirname, 'output/dist'),
      include: ['packages/ulayer/**/*.ts'],
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/ulayer/index.ts'),
      name: 'ULayer',
      fileName: (format) => `ulayer.${format}.js`,
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: 'index.css',
      },
    },
    outDir: resolve(__dirname, 'output/dist'),
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
    },
  },
});
