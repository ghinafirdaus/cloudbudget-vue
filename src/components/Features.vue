<template>
    <div class="featuresContainer">
            <b-row class="featuresTop"><h2>Features</h2></b-row>
            <b-row class="featuresBottom">
                <b-col class="featuresItems">
                    <b-row><img src="https://s3-alpha-sig.figma.com/img/c466/5f06/1fbdd75da83a448d4075fb483dcc5925?Expires=1604275200&Signature=eWiV8cSGAzZEfW7t~7UpYl8GkRJcONmK-B144RCll~QuUUikLdfdA5jNr0ZpFOEKcGS6dHdqz~WYaZWezgtb9f~ao5SVlIn~AYeNrdW7B9Qqu7rBQbjQifDdwAoOrxv9Wv9BSc6vPdaYhr~AhA~P--kWXpiI-5qLsjZnZpmhpGFMeBSu~u4HcDO1edCtZPmVdSfCj4AW3jiToh-OtRJuFSXIIH3fg2ImtXC96OKseL3XHh966S4~6nFBbSP~pdEgJVFvIaWSzYLlMjVhwo-oJ2lCFLtyAch0lHPh3op2uMpgNpQObhpBm4RPebkI~yp73kNKYCvC7d3dXkJbtj1OYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></b-row>
                    <b-row class="featuresDetails">
                        <h3>Supports All Currencies and Cards</h3>
                        <p>We support all popular currencies and is fully customizable to add</p>
                        <a href="#">Read more</a>
                    </b-row>
                </b-col>
                <b-col class="featuresItems">
                    <b-row><img src="https://s3-alpha-sig.figma.com/img/e46b/3c02/b05a03808c8c2547e92aed2df38b7f1d?Expires=1604275200&Signature=QRiVUv~ks7RNA9UgkQgj2me44DKU-8EHaZlon8dRS-UwQvuzSEDCCfsrGBnWzbrBxdQWSW-6aSN7eMKT7tlilNshnqqxfD9Q-2fIN~~3ITfZDsGfgf80tE4Cxbb9eDEF7Q1G6RtvzH9F8ZyQNrXXNvgMKliixJG4JACqOZPpyJnLTJCb-hwaKs1kSvGITVnos~H2T2uqpIe8vaNjv3vJTh0G4NMvXsf5Fax~lH-Mz3oINt5U9zpHZp9PkyGu~xGi~Klky3UlsIeWuggRElsu6i5w2yLNMyD66y8Uvox3OGJJSQMJdjpbywcyA8JlYxHSbYBs9eJQgT6bUBJ-OCM7eQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></b-row>
                    <b-row class="featuresDetails">
                        <h3>Manage your expenses on the go</h3>
                        <p>You can access your account from anywhere in the world on any device</p>
                        <br>
                        <a href="#">Read more</a>
                    </b-row>
                </b-col>
                <b-col class="featuresItems">
                    <b-row><img src="https://s3-alpha-sig.figma.com/img/3897/804a/b275c80a11440f3c7232f90be6f84175?Expires=1604275200&Signature=IjXgdUKxZtkU6xwyM0ZPwpb2~g4wRH8hNplN~dVMn1zk0Hl5m9yTj2GkonhYL5j7oCNQQsg9y-NRiVw0ZGdUmsmo649CnOrHeMLdMm7DLm3kmdCAqFVGKqfbTasE-kQ3mMyKfiLKHcOZjG9cl3DAjP9aVu9chIJZnbhuf7ifde9~C9OYYjuOOhRJX~thrxni0kplZaFcD8pQ41rHUI4KGnwmxg1lNPzU4A-Qjf8-nJrtntNionHJ3-WS752JcQQkWsCNOZETiVWMqvQFdsYCFtkCTpqgGylB9~mwTsQRb3tBqvtOmpgoq-UrZ7bxt41Mi~1MqlOpPENFzfZ6p8ZZvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></b-row>
                    <b-row class="featuresDetails">
                        <h3>Cloud Budget Management Software</h3>
                        <p>Our software is made so you can access and manage your budget</p>
                        <br>
                        <a href="#">Read more</a>
                    </b-row>
                </b-col>
            </b-row>
    </div>
</template>

<script>
export default {
    name:'Features',
    data: function() {
        return{
            
        }
    }

}
</script>

<style>
/* Container */
.featuresContainer {
    position: absolute;
    width: 1440px;
    height: 660px;
    left: 0px;
    top: 1282px;    
    background: #FAFAFA;
}

/* Features: Top Side */
.featuresTop h2{
    position: absolute;
    width: 1110px;
    height: 55px;
    left: 165px;
    top: 63px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
}

/* Features: Bottom Side */
.featuresBottom {
    position: absolute;
    width: 1440px;
    height: 660px;
    left: 0px;
    top: 0px;
}
.featuresItems {
    width: 300px;
    height: 500px;
    margin: 0 30px;
}
.featuresItems img {
    position: absolute;
    width: 350px;
    height: 250px;
    left: 30px;
    top: 181px;
}

.featuresDetails {
    position: absolute;
    width: 293px;
    height: 198px;
    left: 72px;
    top: 338px;
    background: #FFFFFF;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.featuresDetails h3 {
    width: 229px;
    height: 15px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #101010;
}

.featuresDetails p {
    width: 229px;
    height: 17px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */
    color: #101010;
}

.featuresDetails a {
    width: 253px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #ED4C5C;
}
</style>