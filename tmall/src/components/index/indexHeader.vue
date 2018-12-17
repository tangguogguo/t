<template>
    <header>
      <i style="display: block;width: 10%" class="iconfont icon-saoma"></i>
      <img src="../../../static/img/logo.png" alt="">
      <div class="right">
        <i class="iconfont icon-erweima"></i>
        <i style="margin-top: 1px;" class="iconfont icon-xiaoxi"></i>
      </div>
    </header>
</template>

<script>
    export default {
        name: "indexHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 0.33rem;
    background-color: #2c3039;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    align-items: center;
    font-size: 0.15rem;
    color: #ffffff;
    box-sizing: border-box;
  }
  header img{
    width: 0.77rem;
    height: 0.15rem;
  }
  header .right{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header .icon-saoma{

  }
</style>
