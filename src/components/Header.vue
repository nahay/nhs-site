<template>
    <div id="header">
        <router-link to="/"><img src="../assets/nhs-logo.png" alt="logo" class="logo"></router-link>
        <h1>ahay Home Solutions</h1>
        <nav id="nav"> 
            <router-link v-bind:to="{ name: 'home' }" class="nav-link" v-if="!onHome"> Home </router-link> 
            <router-link v-bind:to="{ name: 'services' }" class="nav-link" v-if="!onServices"> Services </router-link> 
            <router-link v-bind:to="{ name: 'contact' }" class="nav-link" v-if="!onContact"> Contact </router-link> 
            <router-link v-bind:to="{ name: 'about' }" class="nav-link" v-if="!onAbout"> About </router-link> 
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        onHome() {
            return this.$route.name === 'home';
        },
        onContact() {
            return this.$route.name === 'contact';
        },
        onAbout() {
            return this.$route.name === 'about';
        },
        onServices() {
            return this.$route.name === 'services';
        },
    }
}
</script>

<style scoped>
h1 {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    /* font-style: italic; */
}

#header {
    /* border-bottom: 1.5px solid black; */
    display: flex;
    align-items: center;
    /* background-color: #7c8363; */
    background-color: white;
    color: black;
}
.logo {
    height: 8vh;
    padding: .4vw;
}
.logo:hover {
    transform: scale(1.05);
    transition-duration: 800ms;
}
#nav {
    margin-left: auto;
    padding: .7vw;
    text-shadow: 0px 0px 0.7px black;
}
.nav-link {
    display: inline-block;
    color: black;
    text-decoration: none;
    border: 1px solid transparent;
    padding: .5vw;
}
.nav-link:hover {
    text-shadow: 0px 0px 0.5px black;
    color: rgb(73, 72, 72);
}


</style>