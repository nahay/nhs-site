<template>
    <footer class="footer">
        <div class="main-footer">
                <ul class="footer-list">
                    <!-- <li>This</li>
                    <li>Is</li>
                    <li>An</li> -->
                    <li>Example</li>
                    <li>List</li>
                </ul>
            <div class="credits">Website designed and created by Jonathan Nahay</div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.credits {
    font-size: 11px;
}
.footer {
    display:inline-block;
    border-top: 1.5px solid black;
    width: 100vw;
    height:auto;
    /* background-color: #7c8363; */
    background-color: white;
    color: black;
    /* justify-content: center;
    align-items: center; */
}
.footer-list {
    list-style-type: none;
}
</style>