<template>
    <div id="header">
        <router-link to="/"><img src="../assets/CircleLogo.png" alt="logo" class="logo"></router-link>
        <h1>Nahay Home Solutions</h1>
        <nav id="nav"> 
            <router-link v-bind:to="{ name: 'home' }" class="nav-link"> Home </router-link> |
            <router-link v-bind:to="{ name: 'contact' }" class="nav-link"> Contact </router-link> |
            <router-link v-bind:to="{ name: 'about' }" class="nav-link"> About </router-link> |
            <router-link v-bind:to="{ name: 'services' }" class="nav-link"> Services </router-link> 
        </nav>
    </div>
</template>
<!-- v-if="this.$route.name=== 'home'    doesnt work-->  
<style scoped>
#header {
    border-bottom: 1.5px solid black;
    display: flex;
    align-items: center;
    background-color: #7c8363;
    color: black;
}
.logo {
    height: 8vh;
    padding: .7vw;
}
#nav {
    margin-left: auto;
    padding: .7vw;
}
.nav-link {
    display: inline-block;
    color: black;
    text-decoration: none;
    border: 1px solid transparent;
    padding: .5vw;
}
.nav-link:hover {
    text-shadow: 0.5px 0.5px 1px grey;
}


</style>