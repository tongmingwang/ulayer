import type { InjectionKey, Ref } from 'vue';

export interface TabPaneProps {
  name: string;
  label?: string;
  disabled?: boolean;
}

export interface TabsProps {
  modelValue?: string;
  type?: 'line' | 'card';
  animated?: boolean;
}

export interface TabPane {
  name: string;
  label: string;
  disabled: boolean;
}

export interface TabsContext {
  activeName: Ref<string>;
  panes: Ref<TabPane[]>;
  animated: Ref<boolean>;
  direction: Ref<'left' | 'right'>;
  registerPane: (pane: TabPane) => void;
  unregisterPane: (name: string) => void;
  updateActive: (name: string) => void;
}

export const tabsKey: InjectionKey<TabsContext> = Symbol('UTabs');
