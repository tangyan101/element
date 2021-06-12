<template>
  <div>
    <el-container direction="vertical">
      <el-header>
        <i class="el-icon-edit"></i>
        <i class="el-icon-check"></i>
        <el-icon name="umbrella"></el-icon>
        <el-icon name="delete"></el-icon>
        <el-icon name="s-tools"></el-icon>
        <el-icon name="star-off"></el-icon>
      </el-header>
      <el-main>
        <el-icon name="loading" style="font-size: 30px"></el-icon>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
