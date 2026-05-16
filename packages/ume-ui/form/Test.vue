<template>
  <div style="padding: 20px">
    <h1>Form Test</h1>
    <h2>Basic Usage</h2>
    <u-form>
      <u-form-item label="Name" required :message="msgs.name">
        <u-input
          v-model="formData.name"
          placeholder="Enter name"
          @change="rules.name" />
      </u-form-item>
      <u-form-item label="Email" required :message="msgs.email">
        <u-input
          v-model="formData.email"
          placeholder="Enter email"
          @change="rules.email" />
      </u-form-item>
      <u-form-item>
        <u-button @click="handleSubmit" color="primary">Submit</u-button>
        <u-button @click="handleReset">Reset</u-button>
      </u-form-item>
    </u-form>

    <h2>Inline Layout</h2>
    <u-form inline>
      <u-form-item label="User">
        <u-input v-model="inlineForm.user" placeholder="User" />
      </u-form-item>
      <u-form-item label="Password" prop="password">
        <u-input
          v-model="inlineForm.password"
          type="password"
          placeholder="Password" />
      </u-form-item>
      <u-form-item>
        <u-button color="primary">Login</u-button>
      </u-form-item>
    </u-form>

    <h2>Label Position Top</h2>
    <u-form label-position="top">
      <u-form-item label="Title" prop="title">
        <u-input v-model="topForm.title" placeholder="Enter title" />
      </u-form-item>
      <u-form-item label="Description" prop="desc">
        <u-input
          v-model="topForm.desc"
          type="textarea"
          placeholder="Enter description" />
      </u-form-item>
    </u-form>

    <h2>Custom Validation</h2>
    <u-form>
      <u-form-item
        label="Age"
        prop="age"
        required
        :message="customFormMsgs.age">
        <u-input
          v-model="customForm.age"
          placeholder="Enter age"
          @change="customFormRules.age" />
      </u-form-item>
      <u-form-item label="Phone" prop="phone" :message="customFormMsgs.phone">
        <u-input
          v-model="customForm.phone"
          placeholder="Enter phone"
          @change="customFormRules.phone" />
      </u-form-item>
      <u-form-item>
        <u-button @click="handleCustomSubmit" color="primary">
          Validate
        </u-button>
      </u-form-item>
    </u-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const formData = reactive({
    name: '',
    email: '',
  });
  const msgs = reactive({
    name: '',
    email: '',
  });
  // 验证规则
  const rules = {
    name: () => {
      if (!formData.name) {
        msgs.name = 'Name is required';
        return;
      }
      msgs.name = '';
    },
    email: () => {
      if (!formData.email) {
        msgs.email = 'Email is required';
        return;
      }
      msgs.email = '';
    },
  };

  const inlineForm = reactive({
    user: '',
    password: '',
  });

  const topForm = reactive({
    title: '',
    desc: '',
  });

  const customForm = reactive({
    age: '',
    phone: '',
  });
  const customFormMsgs = reactive({
    age: '',
    phone: '',
  });

  const customFormRules = {
    age: () => {
      customFormMsgs.age = !customForm.age ? 'Age is required' : '';
    },
    phone: () => {
      customFormMsgs.phone = !customForm.phone ? 'Phone is required' : '';
    },
  };

  const handleSubmit = () => {
    for (const key in rules) {
      if (!Object.hasOwn(rules, key)) continue;
      rules[key]?.();
    }
    // 验证表单记过
    const hasError = Object.values(msgs).some((msg) => msg);
    if (hasError) return;
  };

  const handleReset = () => {
    formData.name = '';
    formData.email = '';
    msgs.name = '';
    msgs.email = '';
  };

  const handleCustomSubmit = () => {
    for (const key in customFormRules) {
      if (!Object.hasOwn(customFormRules, key)) continue;
      customFormRules[key]?.();
    }
    // 验证表单记过
    const hasError = Object.values(customFormMsgs).some((msg) => msg);
    if (hasError) return;
  };
</script>
