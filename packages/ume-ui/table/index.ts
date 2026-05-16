import { withInstallComponent } from '@/utils/install';

import UTable from './src/UTable.vue';
import UTableColumn from './src/UTableColumn.vue';

export const Table = withInstallComponent(UTable);
export const TableColumn = withInstallComponent(UTableColumn);

export { UTable, UTableColumn };
export * from './src/types';
