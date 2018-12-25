<template>
  <div class="index">
    <index-header></index-header>
    <div class="nav">
      <index-seach></index-seach>
      <index-classiy></index-classiy>
    </div>
    <index-banner></index-banner>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/indexHeader";
    import IndexSeach from "../components/index/indexSeach";
    import IndexClassiy from "../components/index/indexClassiy";
    import IndexBanner from "../components/index/indexBanner";
    export default {
      name: "index",
      components: {
          IndexBanner,
          IndexClassiy,
          IndexSeach,
          IndexHeader
      }
    }
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav{
    padding: 0 0.08rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #2c3039;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
