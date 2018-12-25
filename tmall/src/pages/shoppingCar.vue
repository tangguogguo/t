<template>
    <div class="shoppingCar">
        <shopping-header></shopping-header>
        <div class="nav">
            <div class="classly"><shopping-nav-classly></shopping-nav-classly></div>
        </div>
    </div>

</template>

<script>
    import ShoppingHeader from "../components/shoppingCar/shoppingHeader";
    import ShoppingNavClassly from "../components/shoppingCar/shoppingNavClassly";
    export default {
        name: "shoppingCar",
        components: {
            ShoppingNavClassly,
            ShoppingHeader
        }
    }
</script>

<style scoped>
    .shoppingCar{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;
    }
    .nav .classly{
        padding: 0.1rem;
        width: 100%;
        box-sizing: border-box;
    }
</style>
