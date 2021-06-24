<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24">
        <h5>基础的文字链接用法。</h5>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h5>文字链接不可用状态。</h5>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
      </el-col>
      <el-col :span="12">
        <el-link icon="el-icon-edit">编辑</el-link>
        <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
      </el-col>
    </el-row>
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
.el-link {
  margin-right: 10px;
}
</style>
