<template>
    <div class="technologyContainer">
            <b-row class="technologyTop"><h2>Technology</h2></b-row>
            <b-row class="technologyBottom">
                <b-col class="technologyPoint">
                    <h1>01</h1>
                    <b-img class="technologyPointImg" src="../assets/cloud.png" alt="cloud icon"></b-img>
                    <h4>Cloud Storage</h4>
                    <p>Access your account from anywhere in the world on any device</p>
                </b-col>
                <b-col class="technologyPoint">
                    <h1>02</h1>
                    <b-img class="technologyPointImg" src="../assets/secure.png" alt="secure icon" style="left: 108px;"></b-img>
                    <h4>Secure</h4>
                    <p>All your information is stored on secure cloud servers</p>
                </b-col>
                <b-col class="technologyPoint">
                    <h1>03</h1>
                    <b-img class="technologyPointImg" src="../assets/pdf.png" alt="pdf icon" style="left: 118px;"></b-img>
                    
                    <h4>PDF Download</h4>
                    <p>Download any of your reports in PDF format</p>
                </b-col>

                <b-col class="technologyPoint">
                    <h1>04</h1>
                    <b-img class="technologyPointImg" src="../assets/csv.png" alt="csv icon" style="left: 118px;"></b-img>
                    <h4>CSV Download</h4>
                    <p>All your information is stored on secure cloud servers</p>
                </b-col>
            </b-row>
    </div>
</template>

<script>
export default {
    name:'Technology',
    data: function() {
        return{
        }
    }

}
</script>

<style>
.technologyContainer {
    position: absolute;
    width: 1440px;
    height: 500px;
    left: 0px;
    top: 1942px;
    background: #FFFFFF;
}


.technologyTop h2 {
    position: absolute;
    width: 1110px;
    height: 55px;
    left: 165px;
    top: 60px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
}

.technologyBottom {
    position: absolute;
    width: 1110px;
    height: 226px;
    left: 165px;
    top: 170px;
}

.technologyPoint {
    text-align: center;
}

.technologyPoint h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 120px;
    /* identical to box height */
    text-align: center;
    color: rgba(16, 16, 16, 0.08);
}

.technologyPoint h4 {
    height: 22px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    color: #101010;
}

.technologyPointImg {
    position: absolute;
    left: 100px;
    top: 60px;
    padding: 0 auto;
}

.technologyPoint p {
    margin: auto;
    width: 191px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14.4px;
    color: #000000;
}
</style>