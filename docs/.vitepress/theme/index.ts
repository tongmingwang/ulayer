// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import '../../../output/dist/color.css';
import '../../../output/dist/index.css';
import ulayer from '../../../output';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // 注册 ulayer 组件库
    app.use(ulayer);

    // 监听主题变化并设置 data-ulayer-theme 属性
    const updateUlayerTheme = (theme: 'dark' | 'light') => {
      document.documentElement.setAttribute('data-ulayer-theme', theme);
    };

    // 初始化主题
    if (typeof window !== 'undefined') {
      // 等待 DOM 加载完成后再设置
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => {
          const currentTheme =
            localStorage.getItem('vitepress-theme-appearance') || 'auto';
          const isDark =
            currentTheme === 'dark' ||
            (currentTheme === 'auto' &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
          updateUlayerTheme(isDark ? 'dark' : 'light');
        });
      } else {
        const currentTheme =
          localStorage.getItem('vitepress-theme-appearance') || 'auto';
        const isDark =
          currentTheme === 'dark' ||
          (currentTheme === 'auto' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);
        updateUlayerTheme(isDark ? 'dark' : 'light');
      }

      // 监听主题变化事件
      window.addEventListener('storage', (e) => {
        if (e.key === 'vitepress-theme-appearance') {
          const newTheme = e.newValue || 'auto';
          const isDark =
            newTheme === 'dark' ||
            (newTheme === 'auto' &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
          updateUlayerTheme(isDark ? 'dark' : 'light');
        }
      });

      // 监听系统主题变化
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (localStorage.getItem('vitepress-theme-appearance') === 'auto') {
          updateUlayerTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  },
} satisfies Theme;
