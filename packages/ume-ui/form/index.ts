import { withInstallComponent } from '@/utils/install';
import UForm from './src/UForm.vue';
import UFormItem from './src/UFormItem.vue';

export const Form = withInstallComponent(UForm);
export const FormItem = withInstallComponent(UFormItem);

export { UForm, UFormItem };
export * from './src/types';
