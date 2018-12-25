<template>
    <div class="shoppingCar">
        <shopping-header></shopping-header>
    </div>

</template>

<script>
    import ShoppingHeader from "../components/shoppingCar/shoppingHeader";
    export default {
        name: "shoppingCar",
        components: {
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
</style>
