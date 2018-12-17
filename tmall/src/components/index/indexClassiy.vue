<template>
  <div class="classiy">
    <ul>
      <li><img src="../../../static/img/f1.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f2.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f3.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f4.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f5.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f2.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f3.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f4.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f5.png" alt=""><span>苏宁易购</span></li>
      <li><img src="../../../static/img/f1.png" alt=""><span>苏宁易购</span></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "indexClassiy"
    }
</script>

<style scoped>
  .classiy{
    width: 100%;
    display: flex;
    /*padding-top: 0.17rem;*/
    box-sizing: border-box;
  }
  .classiy ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .classiy li{
    width: 20%;
  }
  .classiy li img{
    width: 0.46rem;
    display: block;
    margin: 0 auto;
    padding-top: 0.17rem;
  }
  .classiy li span{
    font-size: 0.1rem;
    color: #fff;
    line-height: 0.22rem;
    display: block;
    text-align: center;
    padding-bottom: 0.08rem;
  }
</style>
