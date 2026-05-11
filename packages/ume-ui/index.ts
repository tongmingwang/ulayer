import type { App, Plugin } from 'vue';
import button, { UButton } from './button';
import input, { UInput } from './input';
import buttonGroup, { UButtonGroup } from './button-group';
import checkbox, { UCheckbox } from './checkbox';
import { radio, radioGroup, URadio, URadioGroup } from './radio';
import fab, { UFab } from './fab';
import { UIcon } from './icon';
import { list, listItem, UList, UListItem } from './list';
import Select, { USelect } from './select';
import ripple from '@/directives/ripple';
import { useTheme } from '@/hooks/useTheme';
import Mask, { UMask } from './mask';
import Dialog, { UDialog } from './dialog';
import {
  Card,
  UCard,
  CardText,
  UCardText,
  CardTitle,
  UCardTitle,
} from './card';
import icon from './icon';
import Drawer, { UDrawer } from './drawer';
import Alert, { UAlert } from './alert';
import Badge, { UBadge } from './badge';
import Divider, { UDivider } from './divider';

const components: Plugin[] = [
  button,
  input,
  buttonGroup,
  checkbox,
  radio,
  radioGroup,
  fab,
  icon,
  list,
  listItem,
  Select,
  Mask,
  Dialog,
  Card,
  CardText,
  CardTitle,
  Drawer,
  Alert,
  Badge,
  Divider,
];

export const install = (app: App) => {
  app.directive('ripple', ripple);
  components.forEach((component) => {
    app.use(component);
  });
};

export {
  UButton,
  UInput,
  UButtonGroup,
  UCheckbox,
  URadio,
  URadioGroup,
  UFab,
  UIcon,
  ripple,
  useTheme,
  UList,
  UListItem,
  USelect,
  UMask,
  UDialog,
  UCard,
  UCardText,
  UCardTitle,
  UDrawer,
  UAlert,
  UBadge,
  UDivider,
};

export * from './button';
export * from './input';
export * from './button-group';
export * from './checkbox';
export * from './radio';
export * from './fab';
export * from './divider';

export default {
  install,
};
