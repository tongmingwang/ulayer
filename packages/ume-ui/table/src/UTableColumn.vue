<template>
  <div style="display: none">
    <!-- UTableColumn is a declarative component – it renders nothing itself -->
  </div>
</template>

<script setup lang="ts">
  import type { UTableColumnProps, TableColumn } from './types';
  import type { TableContext } from './types';
  import { tableKey } from './types';
  import { inject, onMounted, onBeforeUnmount, computed } from 'vue';
  import { genColumnId } from './hooks';

  defineOptions({ name: 'UTableColumn' });

  const props = withDefaults(defineProps<UTableColumnProps>(), {
    prop: '',
    label: '',
    width: '',
    minWidth: '',
    align: 'left',
    headerAlign: undefined as 'left' | 'center' | 'right' | undefined,
    fixed: false,
    sortable: false,
    ellipsis: false,
  });

  const tableCtx = inject<TableContext | null>(tableKey, null);

  const colId = genColumnId();

  const normalizeWidth = (v: string | number | undefined): string | undefined => {
    if (!v) return undefined;
    return typeof v === 'number' ? `${v}px` : v;
  };

  const columnData = computed<TableColumn>(() => ({
    id: colId,
    prop: props.prop || undefined,
    label: props.label || undefined,
    width: normalizeWidth(props.width),
    minWidth: normalizeWidth(props.minWidth),
    align: props.align,
    headerAlign: props.headerAlign || undefined,
    fixed: props.fixed === true ? false : (props.fixed as 'left' | 'right' | false) || false,
    sortable: props.sortable,
    ellipsis: props.ellipsis,
  }));

  onMounted(() => {
    tableCtx?.registerColumn(columnData.value);
  });

  onBeforeUnmount(() => {
    tableCtx?.unregisterColumn(colId);
  });
</script>
