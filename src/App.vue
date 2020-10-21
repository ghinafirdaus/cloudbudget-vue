<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <SignUp/>
     <VideoSection/>
     <Features/>
     <Technology/>
     <AppDownload/>
     <ContactUs/>
     <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import VideoSection from './components/VideoSection.vue'
import Features from './components/Features.vue'
import Technology from './components/Technology.vue'
import AppDownload from './components/AppDownload.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SignUp,
    VideoSection,
    Features,
    Technology,
    AppDownload,
    ContactUs,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
