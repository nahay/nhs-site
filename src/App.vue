<template>
<div id="app">  
        <Header />
    <div class="content">
        <router-view />
    </div>
        <Footer />
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
    overflow-x: hidden;
}
.content {
min-height: 90vh;
background-color: #f5efd6;
}
body {
    margin: 0 !important;
    
}
</style>
