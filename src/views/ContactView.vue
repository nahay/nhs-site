<template>
<div class="main"> 
    <Contact />
</div>      
</template>

<script>
import Contact from '../components/Contact.vue';
export default {
    components: {
        Contact
    }
}
</script>

<style>
.main {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-image: url("@/assets/blueprint.jpg");
    background-size:cover;
}
</style>