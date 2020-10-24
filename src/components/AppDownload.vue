<template>
    <div class="appDownloadContainer">
        <b-col class="appDownloadLeftSide">
            <b-row>
                <h2>Stay focused on saving money</h2>
            </b-row>
            <b-row>
                <p>It is important to stay focused on saving money in any way you can.
                     We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses.
                     Simply join today to get started!</p>
            </b-row>
            <b-row class="appDownloadLogoSection">
                <b-col class="appDownloadLogo"><img src="../assets/app1.png" alt="app1"></b-col>
                <b-col class="appDownloadLogo"><img src="../assets/app2.png" alt="app2"></b-col>
                <b-col class="appDownloadLogo"><img src="../assets/app3.png" alt="app3"></b-col>
            </b-row>
        </b-col>
        <b-col class="appDownloadRightSide">
            <b-row class="appDownloadImg">
                <b-col class="img1"></b-col>
                <b-col class="img3"></b-col>
                <b-col class="img2"></b-col>
            </b-row>
        </b-col>
    </div>
</template>

<script>
export default {
    name:'AppDownload',
    data: function() {
        return{
            
        }
    }

}
</script>

<style>
.appDownloadContainer {
    position: absolute;
    width: 1440px;
    height: 500px;
    left: 0px;
    top: 2442px;

    background: #ED4C5C;
}

.appDownloadLeftSide h2 {
    position: absolute;
    width: 445px;
    height: 107px;
    left: 165px;
    top: 122px;

    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;

    color: #FFFFFF;
}

.appDownloadLeftSide p {
    position: absolute;
    width: 445px;
    height: 64px;
    left: 165px;
    top: 253px;

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */

    text-align: justify;

    color: #FFFFFF;
}

.appDownloadLogoSection {
    position: absolute;
    width: 180px;
    height: 32px;
    left: 163px;
    top: 361px;
}

.appDownloadImg .img1 {
    position: absolute;
    width: 383px;
    height: 267px;
    left: 691px;
    top: 116px;
    background: url(https://s3-alpha-sig.figma.com/img/bf6e/07fd/181172eaa746202695fb45371f090807?Expires=1604275200&Signature=gQ9MhBH6sMGHpxUsQ2-7p1v5giBGRv3lEko87BwSO8bdSUhqzm9yC0xt59q~eZM35kcPu~m-KiVDu2C4B4Z7CzII7fiM15VCyUSunvrnbqICQoqZ2qFlIjBwHs-7loFrRdWr6L0AuOk-JJUGESH~CoZEJEQY71o0IyqZi2NMPILTF~PVAfzbVRzAy0Ti-Zn-FAuB3oVDg3rla9J-oMF2JXyhjtuZwd3Ca4UkwkqtcemlOS5hqRQoZoSjj2R-a4SP4eim4gYm9mmEcKf0y0MI2ZvjbVvddTj51EPJ1oTQ8pHbUrix7ly47onetOrzmjnNRIdUXdUOJmUCF9rt0dwcKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA), #C4C4C4;
    background-size: cover;
    opacity: 0.5;
    border-radius: 15px;
}

.appDownloadImg .img2 {
    position: absolute;
    width: 445px;
    height: 311px;
    left: 735px;
    top: 94px;
    background: url(https://s3-alpha-sig.figma.com/img/594f/38c3/561c92ba8543e9aa162c62dc530cac1f?Expires=1604275200&Signature=g5toTA3Dkd02F1Aqo1o2bxNrShocHdxyAitQeHvecuWVFo0n6ffBhyCTLE1hsl7yVaqnJBmmPNreE~Q5vxzohpGOWih40mwVy6NCEgtC6HbhhtfQSiW5g8iUffw327x~uqpwA89iJqrOROGXl6Q~E~WFRRJUiuPNSv9-4HAQbYyQzfHeMRCsk-ritoWc4arIj18PiVhAYZNY0pldooGBzNl7WKg6vqmXV4fcWWzgZBz2o-jwHsNass0DDBU3wnpK7a3U7Ge7V1DiTio3FEX6VhvtBkC5xSYJMlrVmN2VhaPRepgkPb1THCqOC-q9c2Qpx0ULfy8oOS~c5z0W6k5-4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA), #C4C4C4;
    background-size: cover;
    border-radius: 15px;
}

.appDownloadImg .img3 {
    position: absolute;
    width: 383px;
    height: 267px;
    left: 841px;
    top: 116px;
    background: url(https://s3-alpha-sig.figma.com/img/980f/7791/224d8c62aa52714bfba2c145c59cec55?Expires=1604275200&Signature=WjOS8bc2tKF5-VPtpf22GvWTYeMIcUkjD-nyCsiFTP2QgrFMy0ihzWzMme6xou9CPQ3lKSkAJIsL~UAGcVlEU9P-j0Qd9y4cuK7a5yUSjOsh-RGkbCXcXEhbjmIPMGHp81KNdo0bb8SMkIE~lGAa7GhL-5TPbkZzKqcdO4nRwVGHV-cMoil3mjaJvypFusfT2yBzveRO0FgGPyRquf2RiPTEIw9ucIas59eCOXY6vPMOh3pKDYDnq5GGgUJzKJCUrcvbw2GCgzI0r2ml0NUiXu7q3PGoBW1cWG~uFbNHPOKIoMWq7zyL8tVotYsPSep6jjX-4N0-JlpXnJK-NhDQHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA), #C4C4C4;
    background-size: cover;
    opacity: 0.5;
    border-radius: 15px;
}
</style>