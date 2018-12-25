<template>
    <div class="classly">
        <div class="classlyTop">
            <div class="topLeft">
                <span id="input_a"></span>
                <p>依梵希娜旗舰店</p>
            </div>
            <p>领券</p>
        </div>
        <div class="classlyCen">
            <span id="input_b"></span>
            <img src="../../../static/img/shoppimg1.png" alt="">
            <div class="cenRight">
                <p>韩版阿尔巴卡羊绒呢大衣2018秋冬新款过膝长款羊毛双面呢子女外套</p>
                <span>灰色;XS&nbsp;&nbsp;&nbsp;∨</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shoppingNavClassly"
    }
</script>

<style scoped>
    .classly{
        width: 100%;
        border-radius: 0.1rem;
        background-color: #fff;
        padding: 0 0.12rem;
        box-sizing: border-box;
    }

    .classlyTop{
        width: 100%;
        line-height: 0.46rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .classlyTop .topLeft{
        display: flex;
        align-items: center;
    }
    .classlyTop .topLeft p{
        font-weight: bold;
        color: #191919;
    }
    #input_a{
        display: block;
        width: 0.19rem;
        height: 0.19rem;
        border-radius: 50%;
        border: 2px solid #a9a9a9;
        box-sizing: border-box;
        margin-right: 0.12rem;
    }
    .classlyTop p{
        font-size: 0.12rem;
        color: #808080;
    }
    .classlyCen{
        display: flex;
        align-items: center;
        padding: 0.05rem 0;
    }
    #input_b{
        display: block;
        width: 0.19rem;
        height: 0.19rem;
        border-radius: 50%;
        border: 2px solid #a9a9a9;
        box-sizing: border-box;
        margin-right: 0.12rem;
    }
    .classlyCen img{
        width: 0.85rem;
        height: 0.85rem;

    }
    .classlyCen .cenRight{

    }
    .cenRight p{
        font-size: 0.1rem;
        color: #373c40;
        line-height: 0.17rem;
        padding-left: 0.11rem;
    }
    .cenRight span{
        width: 0.6rem;
        display: block;
        line-height: 0.23rem;
        background-color: #f5f5f5;
        border-radius: 5px;
        font-size: 0.11rem;
        color: #858585;
    }
</style>
