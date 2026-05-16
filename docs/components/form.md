# Form

The `u-form` component is used for form layout and data collection, and the `u-form-item` component is used to wrap form controls, providing label display and error message prompts.

## Basic Usage

Basic form layout usage.

<u-form>
  <u-form-item label="Name" required>
    <u-input placeholder="Enter name" />
  </u-form-item>
  <u-form-item label="Email" required>
    <u-input placeholder="Enter email" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary">Submit</u-button>
    <u-button>Reset</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form>
    <u-form-item label="Name" required>
      <u-input placeholder="Enter name" />
    </u-form-item>
    <u-form-item label="Email" required>
      <u-input placeholder="Enter email" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary">Submit</u-button>
      <u-button>Reset</u-button>
    </u-form-item>
  </u-form>
</template>
```

## Inline Layout

When `inline` is set to `true`, form items will be displayed horizontally.

<u-form inline>
  <u-form-item label="User">
    <u-input placeholder="User" />
  </u-form-item>
  <u-form-item label="Password">
    <u-input type="password" placeholder="Password" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary">Login</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form inline>
    <u-form-item label="User">
      <u-input placeholder="User" />
    </u-form-item>
    <u-form-item label="Password">
      <u-input type="password" placeholder="Password" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary">Login</u-button>
    </u-form-item>
  </u-form>
</template>
```

## Label Position

Use the `label-position` property to control the position of the label, supporting `left`, `right`, and `top`.

<u-form label-position="top">
  <u-form-item label="Title">
    <u-input placeholder="Enter title" />
  </u-form-item>
  <u-form-item label="Description">
    <u-input type="textarea" placeholder="Enter description" />
  </u-form-item>
</u-form>

```vue
<template>
  <u-form label-position="top">
    <u-form-item label="Title">
      <u-input placeholder="Enter title" />
    </u-form-item>
    <u-form-item label="Description">
      <u-input type="textarea" placeholder="Enter description" />
    </u-form-item>
  </u-form>
</template>
```

## Error Message

Display error messages through the `message` property.

<u-form>
  <u-form-item label="Name" required :message="errorMsg">
    <u-input v-model="name" @blur="validateName" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary" @click="validateName">Validate</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form>
    <u-form-item label="Name" required :message="errorMsg">
      <u-input v-model="name" @blur="validateName" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary" @click="validateName">Validate</u-button>
    </u-form-item>
  </u-form>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const errorMsg = ref('');

const validateName = () => {
  if (!name.value) {
    errorMsg.value = 'Please enter name';
  } else if (name.value.length < 2) {
    errorMsg.value = 'Name must be at least 2 characters';
  } else {
    errorMsg.value = '';
  }
};
</script>
```

## API

### Form Props

| Property      | Description                          | Type                              | Accepted Values         | Default  |
| ------------- | ------------------------------------ | --------------------------------- | ----------------------- | -------- |
| labelPosition | Label position                       | `string`                          | `left` / `right` / `top`| `right`  |
| labelWidth    | Label width                          | `string`                          | -                       | -        |
| inline        | Inline layout                        | `boolean`                         | -                       | `false`  |
| disabled      | Disable the entire form              | `boolean`                         | -                       | `false`  |

### FormItem Props

| Property    | Description                          | Type             | Accepted Values | Default |
| ----------- | ------------------------------------ | ---------------- | --------------- | ------- |
| label       | Label text                           | `string`         | -               | -       |
| labelWidth  | Label width (overrides form setting) | `string`         | -               | `80px`  |
| required    | Whether required                     | `boolean`        | -               | `false` |
| message     | Error message                        | `string`         | -               | -       |
| color       | Error message color                  | `string`         | Built-in colors | `error` |

### FormItem Slots

| Slot Name | Description           |
| --------- | --------------------- |
| default   | Form control content  |
| label     | Custom label content  |

<script setup>
import { ref } from 'vue';

const name = ref('');
const errorMsg = ref('');

const validateName = () => {
  if (!name.value) {
    errorMsg.value = 'Please enter name';
  } else if (name.value.length < 2) {
    errorMsg.value = 'Name must be at least 2 characters';
  } else {
    errorMsg.value = '';
  }
};
</script>
