<template>
  <div>
    <h1>UDropdown</h1>

    <h2>Click trigger (default)</h2>
    <UDropdown v-model="active">
      <UButton>Click Me {{ active }}</UButton>
      <template #content>
        <UDropdownItem value="1">Action 1</UDropdownItem>
        <UDropdownItem value="2">Action 2</UDropdownItem>
        <UDropdownItem value="3" disabled>Action 3 (disabled)</UDropdownItem>
        <UDropdownItem value="4" divided>Action 4 (divided)</UDropdownItem>
      </template>
    </UDropdown>

    <h2>Hover trigger</h2>
    <UDropdown trigger="hover">
      <UButton color="success">Hover Me</UButton>
      <template #content>
        <UDropdownItem value="">Option A</UDropdownItem>
        <UDropdownItem value="">Option B</UDropdownItem>
        <UDropdownItem value="">Option C</UDropdownItem>
      </template>
    </UDropdown>

    <h2>Contextmenu trigger (right-click)</h2>
    <UDropdown trigger="contextmenu">
      <UButton color="warning">Right Click Me</UButton>
      <template #content>
        <UDropdownItem value="copy">Copy</UDropdownItem>
        <UDropdownItem value="paste">Paste</UDropdownItem>
        <UDropdownItem value="cut" color="error">Cut</UDropdownItem>
        <UDropdownItem value="delete" color="error" divided>
          Delete
        </UDropdownItem>
      </template>
    </UDropdown>

    <h2>With items prop</h2>
    <UDropdown
      trigger="click"
      :items="[
        { label: 'New File', value: 'new' },
        { label: 'Open File', value: 'open' },
        { label: 'Save', value: 'save', divided: true },
        { label: 'Save As', value: 'saveas' },
      ]">
      <UButton color="error">File Menu</UButton>
    </UDropdown>

    <h2>Disabled</h2>
    <UDropdown disabled>
      <UButton disabled>Disabled Dropdown</UButton>
      <template #content>
        <UDropdownItem value="1">Should not appear</UDropdownItem>
      </template>
    </UDropdown>

    <h2>Custom width + color items</h2>
    <UDropdown width="200px" trigger="hover">
      <UButton color="info">Wide Dropdown</UButton>
      <template #content>
        <UDropdownItem value="profile" color="primary">Profile</UDropdownItem>
        <UDropdownItem value="settings" color="success">Settings</UDropdownItem>
        <UDropdownItem value="warning" color="warning">
          Warning Item
        </UDropdownItem>
        <UDropdownItem value="logout" color="error" divided>
          Logout
        </UDropdownItem>
      </template>
    </UDropdown>

    <h2>Top placement</h2>
    <UDropdown placement="top-start" trigger="click">
      <UButton>Drop Up</UButton>
      <template #content>
        <UDropdownItem value="1">Item 1</UDropdownItem>
        <UDropdownItem value="2">Item 2</UDropdownItem>
        <UDropdownItem value="3">Item 3</UDropdownItem>
      </template>
    </UDropdown>

    <h2>Hover + Click (combined)</h2>
    <UDropdown :trigger="['hover', 'click']">
      <UButton color="primary">Hover or Click Me</UButton>
      <template #content>
        <UDropdownItem value="1">Hover opens, click locks</UDropdownItem>
        <UDropdownItem value="2">Click again to close</UDropdownItem>
        <UDropdownItem value="3" divided>Item 3</UDropdownItem>
      </template>
    </UDropdown>

    <h2>Hover + Contextmenu</h2>
    <UDropdown :trigger="['hover', 'contextmenu']">
      <UButton color="success">Hover or Right-click</UButton>
      <template #content>
        <UDropdownItem value="a">Option A</UDropdownItem>
        <UDropdownItem value="b">Option B</UDropdownItem>
        <UDropdownItem value="c">Option C</UDropdownItem>
      </template>
    </UDropdown>

    <h2>All triggers combined</h2>
    <UDropdown :trigger="['hover', 'click', 'contextmenu']">
      <UButton color="warning">Any trigger works</UButton>
      <template #content>
        <UDropdownItem value="copy">Copy</UDropdownItem>
        <UDropdownItem value="paste">Paste</UDropdownItem>
        <UDropdownItem value="cut" color="error">Cut</UDropdownItem>
        <UDropdownItem value="delete" color="error" divided>
          Delete
        </UDropdownItem>
      </template>
    </UDropdown>

    <h2>Contextmenu on area</h2>
    <UDropdown trigger="contextmenu">
      <div
        style="
          border: 2px dashed var(--u-border);
          padding: 40px;
          text-align: center;
          border-radius: 8px;
        ">
        Right-click anywhere in this area
      </div>
      <template #content>
        <UDropdownItem value="refresh">Refresh</UDropdownItem>
        <UDropdownItem value="inspect">Inspect</UDropdownItem>
        <UDropdownItem value="source" divided>View Source</UDropdownItem>
      </template>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const active = ref('');
</script>

<style scoped></style>
