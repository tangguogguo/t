<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div style="background-color: skyblue;" class="swiper-slide">Slide 1</div>
            <div style="background-color: red;" class="swiper-slide">Slide 2</div>
            <div style="background-color: green;" class="swiper-slide">Slide 3</div>
            <div style="background-color: rebeccapurple;" class="swiper-slide">Slide 4</div>
            <div style="background-color: orangered;" class="swiper-slide">Slide 5</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import '../../../node_modules/swiper/dist/css/swiper.min.css'
    // import '../../../node_modules/swiper/dist/js/swiper.min'
    export default {
        name: "indexBanner",
        mounted(){
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    }
</script>

<style scoped>
    .swiper-container{
        width: 100%;
        height: 1.75rem;
    }
    .swiper-slide{
        font-size: 0.2rem;
        text-align: center;
        line-height: 1.75rem;
        color: #fff;
    }
</style>
