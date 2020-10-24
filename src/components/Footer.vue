<template>
    <div class="footerContainer">
        <b-col class="footerSection1">
            <b-row><h3>Address</h3></b-row>
            <b-row><p>Pipang Ltd, Griva Digeni,<br>
81-83 Jacovides Tower, <br>1st Floor
1090 Picosia USA</p></b-row>
            <b-row><span>Copyright 2018 CloudBudget</span></b-row>
        </b-col>
        <b-col class="footerSection2">
            <b-row><h3>Services</h3></b-row>
            <b-row><ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Technology</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
            </ul></b-row>
        </b-col>
        <b-col class="footerSection3">
            <b-row><h3>Get in Touch</h3></b-row>
            <b-row><ul>
                <li>info@cloudbudget.com</li>
                <li>+1 844-721-7120</li>
                </ul></b-row>
        </b-col>
        <b-col class="footerSection4">
            <b-row><h3>We Support</h3></b-row>
            <b-row><img src="../assets/payment.png" alt=""></b-row>
        </b-col>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data: function() {
        return{
            
        }
    }

}
</script>

<style>
.footerContainer {
    position: absolute;
    width: 1440px;
    height: 435px;
    left: 0px;
    top: 3487px;

    background: #FAFAFA;
}

.footerSection1, .footerSection2, .footerSection3, .footerSection4 {
    position: absolute;
    width: 254px;
    left: 166px;
    top: 85px;
    /* identical to box height */
}

.footerSection1 h3 , .footerSection2 h3, .footerSection3 h3, .footerSection4 h3  {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    height: 40px;
    /* identical to box height */
    color: #101010;
}

.footerSection1 p {
    width: 200px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */
    color: #101010;
}

.footerSection1 span {
    position:absolute;
    top: 255px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */
    color: #101010;
}

.footerSection2 {
    position: absolute;
    top: 85px;
    left: 450px;
}


.footerSection2 ul, li {
   margin-left: 0;
   padding-left: 0;
   list-style: none;
   margin-left: 0;
   padding-left: 0;
   list-style: none;
   font-family: Lato;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 160%;
   /* or 19px */
   text-transform: capitalize;
   color: #000000;
}

.footerSection3 {
    position: absolute;
    top: 85px;
    left: 734px;
}

.footerSection3 ul, li {
   margin-left: 0;
   padding-left: 0;
   list-style: none;
   font-weight: normal;
   font-size: 12px;
   line-height: 160%;
   /* or 19px */
   text-transform: capitalize;
   color: #000000;
}

.footerSection4 {
    position: absolute;
    top: 85x;
    left: 1022px;
}
</style>