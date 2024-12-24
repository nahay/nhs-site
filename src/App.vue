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
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content {

}
body {
    margin: 0 !important;
}
</style>