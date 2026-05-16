<template>
  <div class="u-table-wrapper" :style="wrapperStyle" ref="wrapperRef">
    <table :class="tableClass">
      <thead v-if="props.showHeader">
        <tr>
          <th
            v-for="col in columns"
            :key="col.id"
            :style="getHeaderStyle(col)"
            :class="{ 'is-sortable': col.sortable }"
            @click="handleSortClick(col)">
            <slot :name="`header-${col.prop}`" :column="col">
              {{ col.label || '' }}
            </slot>
            <span v-if="col.sortable" class="u-table__sort-icon">
              <i
                class="sort-asc"
                :class="{
                  'is-active':
                    sortState.prop === col.prop && sortState.order === 'asc',
                }"></i>
              <i
                class="sort-desc"
                :class="{
                  'is-active':
                    sortState.prop === col.prop && sortState.order === 'desc',
                }"></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in sortedData"
          :key="rowIndex"
          :class="[
            ...getRowClass(row, rowIndex),
            props.stripe && rowIndex % 2 === 1 ? 'u-table__row--even' : '',
          ]">
          <td
            v-for="col in columns"
            :key="col.id"
            :style="getCellStyle(col)"
            :class="{ 'u-table__cell--ellipsis': col.ellipsis }">
            <slot
              :name="col.prop"
              :row="row"
              :column="col"
              :rowIndex="rowIndex"
              :value="col.prop ? row[col.prop] : ''">
              {{ col.prop ? row[col.prop] : '' }}
            </slot>
          </td>
        </tr>
        <tr v-if="!sortedData.length">
          <td :colspan="columns.length" class="u-table__empty">
            <slot name="empty">No Data</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import type { UTableProps, TableColumn } from './types';
  import { useTable } from './hooks';

  defineOptions({ name: 'UTable' });

  const props = withDefaults(defineProps<UTableProps>(), {
    height: '',
    stripe: false,
    border: false,
    showHeader: true,
    size: 'medium',
  });

  const emit = defineEmits<{
    (e: 'sort-change', sortInfo: { prop: string; order: 'asc' | 'desc' | null }): void;
  }>();

  const { columns, sortState, sortedData, tableClass, wrapperStyle, getRowClass } = useTable(
    props,
    emit
  );

  const handleSortClick = (col: TableColumn) => {
    if (!col.sortable || !col.prop) return;
    const { prop, order } = sortState.value;
    let next: 'asc' | 'desc' | null;
    if (prop !== col.prop) {
      next = 'asc';
    } else if (order === 'asc') {
      next = 'desc';
    } else if (order === 'desc') {
      next = null;
    } else {
      next = 'asc';
    }
    sortState.value = { prop: col.prop, order: next };
    emit('sort-change', { prop: col.prop, order: next });
  };

  const formatWidth = (w: string | number | undefined): string | undefined => {
    if (!w) return undefined;
    return typeof w === 'number' ? `${w}px` : w;
  };

  const getHeaderStyle = (col: TableColumn) => ({
    width: formatWidth(col.width),
    minWidth: formatWidth(col.minWidth),
    textAlign: col.headerAlign || col.align || 'left',
  });

  const getCellStyle = (col: TableColumn) => ({
    width: formatWidth(col.width),
    minWidth: formatWidth(col.minWidth),
    textAlign: col.align || 'left',
  });
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
