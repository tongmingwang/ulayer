import type { InjectionKey, Ref } from 'vue';

export interface UTableProps {
  data: Record<string, unknown>[];
  height?: string | number;
  stripe?: boolean;
  border?: boolean;
  showHeader?: boolean;
  rowClassName?: string | ((data: { row: Record<string, unknown>; rowIndex: number }) => string);
  size?: 'small' | 'medium' | 'large';
}

export interface UTableColumnProps {
  prop?: string;
  label?: string;
  width?: string | number;
  minWidth?: string | number;
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right' | false;
  sortable?: boolean;
  ellipsis?: boolean;
}

export interface TableColumn {
  id: string;
  prop?: string;
  label?: string;
  width?: string;
  minWidth?: string;
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right' | false;
  sortable?: boolean;
  ellipsis?: boolean;
}

export interface TableContext {
  columns: Ref<TableColumn[]>;
  registerColumn: (col: TableColumn) => void;
  unregisterColumn: (id: string) => void;
  sortColumn: (prop: string, order: 'asc' | 'desc' | null) => void;
}

export const tableKey: InjectionKey<TableContext> = Symbol('UTable');
