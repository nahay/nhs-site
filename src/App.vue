<template>
<div id="nhs-app">  
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