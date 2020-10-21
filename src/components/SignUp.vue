<template>
    <div class="imgInsideSignupContainer">
    <div class="bgColorSignupContainer">
    <b-container>
            <b-row id="navSectionWrapper">
                <b-col id="logoWrapper"><h3>CloudBudget</h3></b-col>
                <b-col id="navbarWrapper">
                    <div>
                        <b-nav class="b-nav">
                            <b-nav-item class="b-nav-item">Overview</b-nav-item>
                            <b-nav-item class="b-nav-item">Features</b-nav-item>
                            <b-nav-item class="b-nav-item">Technology</b-nav-item>
                            <b-nav-item class="b-nav-item">Contact</b-nav-item>
                            <b-nav-item class="b-nav-item">Sign Up</b-nav-item>
                        </b-nav>
                    </div>
                </b-col>
                <b-col id="langWrapper">
                    <div>
                        <b-dropdown id="dropdown-1" text="EN">
                            <b-dropdown-item active>EN</b-dropdown-item>
                            <b-dropdown-item>ID</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </b-col>
                <b-col id="loginBtnWrapper"><b-button id="loginBtn">Login</b-button></b-col>
            </b-row>

            <b-row id="titleWrapper">
                <b-col><h1>CloudBudget</h1></b-col>
            </b-row>

            <b-row id="detailWrapper">
                <b-col><p>Cloud budget management for everyone. 
                    Only €69.95 a Month After a 7 Day Trial of Up to €4.99</p></b-col>
            </b-row>

            <b-row id="signupBtnWrapper">
                <b-col><b-button id="signupBtn">Sign Up</b-button></b-col>
            </b-row>
    </b-container>
    </div>
     </div>
</template>

<script>
export default {
    name:'SignUp',
    data: function() {
        return{
            
        }
    }

}
</script>

<style>

/* Containers */
.imgInsideSignupContainer, .bgColorSignupContainer {
    position: absolute;
    width: 1440px;
    height: 782px;
    left: 0px;
    top: 0px;
}

.imgInsideSignupContainer {
    background: url(https://s3-alpha-sig.figma.com/img/402c/c231/104d731ba327304370b4aae30b81efa9?Expires=1604275200&Signature=N5dR0a8EQNL~HNBuuaaKfdFLwytC~-NTCAlB2UqQR5VeAw3mrmXcsrafnAHc3pxtDDuzOndOmTW3yNdmupsjv0BefGyc0iTZsZxPSnt6MO86gJG5AtiKTuDQciXYSt3Jsp3dZuouMIKGIP~BEzSBqF~ZHB8E3FaQD8M3KruavnHQm5LQH8ZgLRzD2S2e4rcMzxg2a72Y-foiHaDtiYsGnUFpoR7DzrxovB~PTSXr1OGfr02GFrpic5NcOhDMSTF06K~uX46Fh2Q1isu3RG29dh6w~nbwxgRjZoWazY4rC2x~tfu16ZKEb6i4ClELzaMW3oUggfsIqZX3OmbKdGL1eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA), #C4C4C4;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -90px;
}

.bgColorSignupContainer {
    background: linear-gradient(90deg, rgba(213, 32, 71, 0.8) 0%, rgba(238, 61, 27, 0.8) 100%);
    color: white;
}

/* Navigation */
#navSectionWrapper {
    position: absolute;
    width: 1440px;
    height: 100px;
    left: 0px;
    top: 17px;
}

/* Logo */
#logoWrapper {
    position: absolute;
    width: 136px;
    height: 22px;
    left: 201px;
    top: 59px;
    text-transform: uppercase;
}

#logoWrapper h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}

/* Navbar*/

#navbarWrapper {
    position: absolute;
    width: auto;
    height: 22px;
    left: 498px;
    top: 58px;
    text-transform: uppercase;
}

.b-nav-item {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
}

/* Language Dropdown */
#langWrapper {
    position: absolute;
    width: 32px;
    height: 22px;
    left: 1099px;
    top: 50px;
}
#dropdown-1 {
    border: 1px solid #FFFFFF;
    background: transparent;
}

/* Login Button */
#loginBtnWrapper {
    position: absolute;
    left: 580px;
    top: 50px;
}

/* Login Button */
#loginBtn {
    width: 100px;
    height: 40px;
    border: 1px solid #FFFFFF;
    background: transparent;
    box-sizing: border-box;
    border-radius: 6px;
    text-transform: uppercase;
}

/* Title h1*/
#titleWrapper {
    position: absolute;
    width: 578px;
    height: 86px;
    left: 431px;
    top: 257px;
}

#titleWrapper h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 86px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
}

/* Price Details p*/
#detailWrapper {
    position: absolute;
    width: 540px;
    height: 124px;
    left: 450px;
    top: 382px;
}
#detailWrapper p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */
    text-align: center;
    color: #FFFFFF;
}

/* Signup Button */

#signupBtnWrapper {
    position: absolute;
    left: 640px;
    top: 545px;
}

#signupBtn {
    width: 160px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 6px;
    text-transform: uppercase;
    color: #ED4C5C;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border: none;
}
</style>