import { ref, provide, computed } from 'vue';
import type { UTableProps, TableColumn, TableContext } from './types';
import { tableKey } from './types';

let colId = 0;

export const useTable = (props: UTableProps, emit: (event: 'sort-change', ...args: any[]) => void) => {
  const columns = ref<TableColumn[]>([]);
  const sortState = ref<{ prop: string; order: 'asc' | 'desc' | null }>({
    prop: '',
    order: null,
  });

  const registerColumn = (col: TableColumn) => {
    columns.value.push(col);
  };

  const unregisterColumn = (id: string) => {
    columns.value = columns.value.filter((c) => c.id !== id);
  };

  const sortColumn = (prop: string, order: 'asc' | 'desc' | null) => {
    sortState.value = { prop, order };
    emit('sort-change', { prop, order });
  };

  const sortedData = computed(() => {
    if (!sortState.value.prop || !sortState.value.order) {
      return props.data;
    }
    const { prop, order } = sortState.value;
    return [...props.data].sort((a, b) => {
      const va = a[prop];
      const vb = b[prop];
      if (va == null || vb == null) return 0;
      const result = va > vb ? 1 : va < vb ? -1 : 0;
      return order === 'asc' ? result : -result;
    });
  });

  provide<TableContext>(tableKey, {
    columns,
    registerColumn,
    unregisterColumn,
    sortColumn,
  });

  const tableClass = computed(() => {
    return [
      'u-table',
      props.stripe && 'u-table--stripe',
      props.border && 'u-table--border',
      props.size && `u-table--${props.size}`,
    ].filter(Boolean);
  });

  const wrapperStyle = computed(() => {
    if (!props.height) return {};
    const h = typeof props.height === 'number' ? `${props.height}px` : props.height;
    return { maxHeight: h };
  });

  const getRowClass = (row: Record<string, unknown>, rowIndex: number) => {
    const classes = ['u-table__row'];
    if (props.rowClassName) {
      const extra =
        typeof props.rowClassName === 'function'
          ? props.rowClassName({ row, rowIndex })
          : props.rowClassName;
      if (extra) classes.push(extra);
    }
    return classes;
  };

  return {
    columns,
    sortState,
    sortedData,
    tableClass,
    wrapperStyle,
    getRowClass,
  };
};

export const genColumnId = () => `u-table-col-${++colId}`;
