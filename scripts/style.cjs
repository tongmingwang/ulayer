const { build } = require('vite');
const { resolve } = require('path');

// 打包样式
async function main() {
  await build({
    build: {
      outDir: resolve(__dirname, '../output/dist'),
      cssCodeSplit: true,
      emptyOutDir: true,
      rolldownOptions: {
        input: {
          global: resolve(__dirname, '../packages/global/index.ts'),
        },
        output: {
          assetFileNames: 'color.css',
        },
      },
    },
  });
}
main();
