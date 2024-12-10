<template>
<div id="app">  
        <Header />
    <div class="content">
        <router-view />
        <Footer />
    </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
};

</script>

<style>
/* body {                      //for removing 8px padding around app
    margin: 0 !important;
} */
/* #app {
    width: 100vw;
} */
</style>