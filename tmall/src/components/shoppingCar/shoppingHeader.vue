<template>
    <div class="header">
        <p>购物车</p>
        <p>管理</p>
    </div>
</template>

<script>
    export default {
        name: "shoppingHeader"
    }
</script>

<style scoped>
    .header{
        display: flex;
        padding: 0 0.1rem;
        box-sizing: border-box;
        width: 100%;
        height: 0.44rem;
        background-color: #fe0036;
        background-size: 100% 100%;
        font-size: 0.13rem;
        color: #ffffff;
        align-items: center;
        justify-content: space-between;
    }
    .header p:nth-child(2){
        font-size: 0.1rem;
    }
</style>
