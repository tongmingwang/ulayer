import { ref } from 'vue';

type Theme = 'light' | 'dark';
export function useTheme() {
  const theme = ref<Theme>('light');
  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    // 更新全局的theme
    updateUmeTheme(theme.value);
  };

  const updateUmeTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-ume-ui-theme', theme);
  };
  return { theme, toggleTheme };
}
