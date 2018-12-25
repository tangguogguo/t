<template>
    <ul>
        <li>
            <img src="../../../static/img/bottom1.png" alt="">
            <span>精选</span>
        </li>
        <li>
            <img src="../../../static/img/bottom2.png" alt="">
            <span>种草猫</span>
        </li>
        <li>
            <img src="../../../static/img/bottom3.png" alt="">
            <span>逛商圈</span>
        </li>
        <li>
            <img src="../../../static/img/bottom4.png" alt="">
            <router-link class="shopp" to="/shoppingCar">购物车</router-link>
        </li>
        <li>
            <img src="../../../static/img/bottom5.png" alt="">
            <span>我</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "indexFooter"
    }
</script>

<style scoped>
    ul{
        display: flex;
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        border-top: 1px solid #e8e8e8;
    }
    li{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    li img{
        width: 0.22rem;
        height: 0.22rem;
    }
    li span{
        font-size: 0.1rem;
        color: #a3a3a3;
    }
    li:nth-child(1) span{
        color: #e23258;
    }
    li:nth-child(4) .shopp{
        color: #a3a3a3;
        font-size: 0.1rem;
    }
</style>
