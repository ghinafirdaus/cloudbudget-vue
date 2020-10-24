<template>
    <div class="videoSectionContainer">
        <b-row>
            <b-col class="videoSectionLeftSide">
                <b-row>
                    <h2>Easy to Use Cloud Budget Management Software</h2>
                </b-row>
                <b-row class="videoSectionPWrapper">
                    <p>Our software is made so you can access and manage your budget and expenses online at any time from any device. 
                        It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. 
                        Read below to find out more.</p>
                        <a href="#">Learn More</a>
                </b-row>
            </b-col>
            <b-col class="videoSectionRightSide">
                <img src="https://s3-alpha-sig.figma.com/img/159f/f19b/70edc2e47c7417224c7f0ffe37a8565f?Expires=1604275200&Signature=Qe4pEy0z7UeuyzO6MjTwO~YH1K-2cv0RElLlKUmmEUmtEu7LCVJYLCbojqGbw~fcDYuAwhLS2RdGdwTbgyroH8NiJhAS1zOoWy1ook6J67is5edc6B9zC0scSRH6U8~OF9llrIW7qLKcZxUOCyHKKRBbM3XMNX0y2~b1a6Re31zW2bpT3bE-25O7vIgqUiKHarguxwycFp5k8rtgB9TScz3X~vHmm~aRS2fzzj~7FdFG0JReYykY4HmEkV915sugCH5DjPB0BKWHTPlHK4M3Kps8qPQwp2-nUTnTwNCT13l1ChJtM-UXDe7fd2OcD-9Zs2zCw7rYoduE4IlCaX--NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                <b-button id="playBtn"><b-icon scale="1.25" icon="play-fill" aria-hidden="true"></b-icon></b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:'VideoSection',
    data: function() {
        return{
            
        }
    }

}
</script>

<style>
.videoSectionContainer {
    position: absolute;
    width: 1440px;
    height: 500px;
    top: 782px;
    left: 0px;
}

/* Left Side */
.videoSectionLeftSide {
    position: absolute;
    width: 445px;
    height: 107px;
    left: 0;
}

.videoSectionLeftSide h2{ 
    position: absolute;
    width: 445px;
    height: 107px;
    left: 165px;
    top: 140px;
    text-align: left;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
}

.videoSectionLeftSide p {
    position: absolute;
    width: 445px;
    height: 115px;
    left: 165px;
    top: 271px;
    text-align: justify;
}

.videoSectionLeftSide a {
    position: absolute;
    height: 20px;
    left: 165px;
    top: 410px;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */
    text-align: justify;
    color: #ED4C5C;
}

/* Right Side */
.videoSectionRightSide {
    position: absolute;
    width: 478px;
    height: 311px;
    left: 735px;
    top: 94px;
    background: url();
    border-radius: 15px;
}
.videoSectionRightSide #playBtn {
    position: absolute;
    width: 66px;
    height: 66px;
    left: -20px;
    top: 123px;
    background: #ED4C5C;
    border-radius: 50%;
    border: none;
}
.videoSectionRightSide img {
    width: 445px;
    height: 311px;
    border-radius: 15px;
}
</style>