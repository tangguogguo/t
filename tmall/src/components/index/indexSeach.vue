<template>
    <div class="seach">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="chic棉服女">
      <i class="iconfont icon-camera2"></i>
    </div>
</template>

<script>
    export default {
        name: "indexSeach"
    }
</script>

<style scoped>
  .seach{
    width: 100%;
    padding: 0.08rem;
    box-sizing: border-box;
    border: 1px solid #9b9ba1;
    background-color: #fff;
    line-height: 0.26rem;
    font-size: 0.13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #aeaeae;
  }
  .seach input{
    width: 80%;
    font-size: 0.1rem;
    border: none;
    line-height: 0.26rem;
  }
</style>
