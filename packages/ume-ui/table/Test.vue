<template>
  <div style="padding: 24px">
    <h1>UTable</h1>

    <h2>基础用法</h2>
    <UTable :data="data">
      <UTableColumn prop="name" label="Name" />
      <UTableColumn prop="age" label="Age" width="80" />
      <UTableColumn prop="address" label="Address" />
    </UTable>

    <h2>固定头部（滚动）</h2>
    <UTable :data="longData" height="280" stripe border>
      <UTableColumn prop="id" label="ID" width="60" />
      <UTableColumn prop="name" label="Name" width="120" />
      <UTableColumn prop="age" label="Age" width="80" sortable />
      <UTableColumn prop="email" label="Email" ellipsis />
      <UTableColumn prop="address" label="Address" />
    </UTable>

    <h2>条纹 + 边框</h2>
    <UTable :data="data" stripe border>
      <UTableColumn prop="name" label="Name" />
      <UTableColumn prop="age" label="Age" width="80" align="center" />
      <UTableColumn prop="address" label="Address" />
    </UTable>

    <h2>自定义列内容</h2>
    <UTable :data="data" border>
      <UTableColumn prop="name" label="Name" />
      <UTableColumn prop="age" label="Age" width="80" align="center" />
      <UTableColumn prop="status" label="Status">
        <template #status="{ row }">
          <UBadge :color="row.status === 'active' ? 'success' : 'error'">
            {{ row.status === 'active' ? 'Active' : 'Inactive' }}
          </UBadge>
        </template>
      </UTableColumn>
      <UTableColumn label="Action" width="120" align="center">
        <template #action>
          <UButton size="small">Edit</UButton>
        </template>
      </UTableColumn>
    </UTable>

    <h2>排序</h2>
    <UTable :data="data" border @sort-change="onSortChange">
      <UTableColumn prop="name" label="Name" sortable />
      <UTableColumn prop="age" label="Age" width="100" sortable align="center" />
      <UTableColumn prop="address" label="Address" />
    </UTable>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const data = ref([
    { name: 'Alice', age: 28, address: '123 Main St', status: 'active' },
    { name: 'Bob', age: 34, address: '456 Oak Ave', status: 'inactive' },
    { name: 'Charlie', age: 22, address: '789 Pine Rd', status: 'active' },
    { name: 'Diana', age: 41, address: '321 Elm Blvd', status: 'active' },
  ]);

  const longData = ref(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      age: 20 + (i % 30),
      email: `user${i + 1}@example.com`,
      address: `${100 + i} Somewhere Street, City`,
    }))
  );

  const onSortChange = ({ prop, order }: { prop: string; order: string | null }) => {
    console.log('sort-change:', prop, order);
  };
</script>
