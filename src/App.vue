<template>
  <div>
    <el-button-group>
      <el-button type="primary" autofocus>按钮</el-button>
      <el-button type="primary">按钮</el-button>
      <el-button type="primary" native-type="submit">提交按钮</el-button>

      <el-button @click="handleClick" type="primary">click按钮</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick(e) {
      alert(e);
    },
  },
};
</script>

<style>
.el-button-group {
  margin-right: 10px;
}
</style>
