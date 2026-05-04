const { build } = require('vite');
const { resolve } = require('path');
const fs = require('fs');
const vue = require('@vitejs/plugin-vue');
const { default: dts } = require('vite-plugin-dts');

async function main() {
  try {
    const umeUiDir = resolve(__dirname, '../packages/ume-ui');
    const components = fs.readdirSync(umeUiDir).filter((file) => {
      const filePath = resolve(__dirname, `../packages/ume-ui/${file}`);
      return fs.statSync(filePath).isDirectory();
    });

    console.log(`正在构建以下组件: ${components.join(', ')}`);

    // 对每个组件单独构建，但优化构建参数
    for (const name of components) {
      console.log(`\n构建组件: ${name}`);

      await build({
        configFile: false,
        plugins: [
          vue(),
          dts({
            tsconfigPath: resolve(__dirname, '../tsconfig.app.json'),
            include: [`packages/ume-ui/${name}/**/*.{ts,vue,tsx}`],
            outDir: resolve(__dirname, `../output/dist/${name}/dist`),
            entryRoot: `packages/ume-ui/${name}`,
            insertTypesEntry: true,
            cleanVueFileName: true,
          }),
        ],
        publicDir: false, // 不使用公共资源目录
        build: {
          outDir: resolve(__dirname, `../output/dist/${name}`),
          emptyOutDir: true,
          lib: {
            entry: resolve(__dirname, `../packages/ume-ui/${name}/index.ts`),
            name, // 为每个组件设置名称
            formats: ['es'],
            fileName: 'index',
          },
          rollupOptions: {
            external: ['vue'], // 排除外部依赖
            output: {
              assetFileNames: 'index.css', // CSS 输出为 index.css
              globals: {
                vue: 'Vue', // 定义全局变量
              },
            },
          },
        },
      });

      console.log(`✅ ${name} 组件构建完成`);
    }

    // 为每个组件创建 package.json
    for (const name of components) {
      const componentPackageJson = {
        name: `ume-ui/${name}`,
        private: true,
        main: './index.js',
        module: './index.js',
        style: './index.css',
        types: './index.d.ts',
      };

      const outputPath = resolve(
        __dirname,
        `../output/dist/${name}/package.json`
      );
      fs.writeFileSync(
        outputPath,
        JSON.stringify(componentPackageJson, null, 2)
      );
    }

    console.log('\n✅ 所有组件构建成功！');
  } catch (error) {
    console.error('❌ 构建失败:', error);
    process.exit(1);
  }
}

main();
