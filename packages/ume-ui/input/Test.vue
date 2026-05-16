<template>
  <div>
    <h1>UInput 输入框</h1>
    <section>
      <h2>基础用法</h2>
      <div>
        <u-input
          style="width: 150px"
          v-model="value1"
          type="number"
          placeholder="请输入内容"></u-input>
        <u-select :items="[1]" style="width: 150px"></u-select>
        <u-input v-model="value1" placeholder="请输入内容"></u-input>
      </div>
      <p>当前值: {{ value1 || '(空)' }}</p>
    </section>
    <h2>最大长度</h2>
    <div class="row">
      <u-input :maxlength="6" placeholder="请输入内容"></u-input>
    </div>
    <h2>suffix prefix</h2>
    <div class="row">
      <u-input placeholder="请输入内容" suffix=".com">
        <template #prefix>
          <u-icon name="search"></u-icon>
        </template>
      </u-input>
    </div>
    <h2>Number</h2>
    <div class="row">
      <u-input
        placeholder="请输入内容"
        type="number"
        :max="10"
        v-model="num"></u-input>
      <div>{{ num }}</div>
      <u-input
        placeholder="请输入内容"
        type="number"
        size="small"
        prefix="NO:"></u-input>
      <u-input
        placeholder="请输入内容"
        type="number"
        size="large"
        suffix="亿"></u-input>
      <u-input placeholder="请输入内容" type="number" disabled></u-input>
      <u-input placeholder="请输入内容" type="number" readonly></u-input>
    </div>
    <h2>Textarea</h2>
    <div class="row">
      <u-input
        placeholder="请输入内容"
        v-model="value1"
        type="textarea"></u-input>
      <div>{{ value1 }}</div>
      <u-input placeholder="请输入内容" type="textarea" disabled></u-input>
      <u-input placeholder="请输入内容" type="textarea" readonly></u-input>
    </div>

    <h2>Password</h2>
    <div class="row">
      <u-input placeholder="请输入内容" type="password"></u-input>
      <u-input
        placeholder="请输入内容"
        type="password"
        prefix="password"></u-input>
      <u-input placeholder="请输入内容" type="password" suffix="hi"></u-input>
    </div>

    <section>
      <h2>不同尺寸</h2>
      <div class="row">
        <u-input v-model="value2" placeholder="Small" size="small"></u-input>
        <u-input v-model="value3" placeholder="Medium" size="medium"></u-input>
        <u-input v-model="value4" placeholder="Large" size="large"></u-input>
      </div>
    </section>

    <section>
      <h2>禁用状态</h2>
      <div class="row">
        <u-input v-model="value5" placeholder="disabled" disabled></u-input>
        <u-input v-model="value5" placeholder="readonly" readonly></u-input>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');

  const num = ref(10);
</script>

<style scoped>
  .demo {
    padding: 20px;
  }
  .demo section {
    margin-bottom: 32px;
  }
  .row {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
