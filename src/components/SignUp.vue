<template>
    <div class="imgInsideSignupContainer">
    <div class="bgColorSignupContainer">
            <b-row id="navSectionWrapper">
                <b-col id="logoWrapper">
                    <h3><b-icon id="cloudLogo" font-scale="1.5" icon="cloud-fill" aria-hidden="true"></b-icon>CloudBudget</h3>
                </b-col>
                <b-col id="navbarWrapper">
                        <ul id="navbarUl">
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul> 
                </b-col>
                <b-col id="langWrapper">
                    <div>
                        <b-img id="langFlag" src="../assets/en.png" alt="en image"></b-img>
                        <b-dropdown id="dropdown-1" variant="outline-light border-0" text="EN" class="m-md-2">
                            <b-dropdown-item active href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ID</b-dropdown-item>
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

/* Logo */
#logoWrapper {
    position: absolute;
    width: 136px;
    height: 22px;
    left: 155px;
    top: 59px;
}

#cloudLogo {
    margin: 0 8px 0 0;
}

#logoWrapper h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #FFFFFF;
}

/* Navbar*/

#navbarUl {
    position: absolute;
    width: 545px;
    height: 22px;
    left: 478px;
    top: 58px;
    list-style: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
}

#navbarUl li a {
    text-transform: uppercase;
    padding: 0 10px;
    color: white;
}

/* Language Dropdown */
#langWrapper {
    position: absolute;
    width: 96px;
    height: 32px;
    left: 1056px;
    top: 51px;
}

#langFlag {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 3px;
}

#dropdown-1 {
    margin: 0 20px;
    position: absolute;
    width: 32px;
    height: 22px;
    left: 43px;
    top: 0px;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
}

/* Login Button */
#loginBtnWrapper {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 1172px;
    top: 50px;
    font-weight: normal;
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
    font-size: 14px;
    line-height: 17px;
}
#loginBtn:hover {
    color:#ED4C5C;
    background: white;
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
#detailWrapper p {
    position: absolute;
    width: 540px;
    height: 124px;
    left: 450px;
    top: 382px;
    font-weight: 400;
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

#signupBtn:hover {
    border: 1px solid white;
    background: transparent;
    color: white;
}
</style>