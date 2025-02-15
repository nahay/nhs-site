<template>
        <div class="group">
            <form class="contact">
            <div class="top">
                <h1 class="contact-us">Contact Us</h1>
            </div class="inputs">
                <input type="text" placeholder="Name" id="name" class="input"> <br>
                <input type="text" placeholder="Phone Number" id="number" class="number"> <br>
                <input type="text" placeholder="E-Mail" id="email" class="email"> <br>
                <input type="text" placeholder="City, State" id="location" class="location"> <br>
                <!-- <input type="text" placeholder="Brief Description of Project" id="description" class="description"> <br> -->
                 <textarea name="text" rows="7" class="text" placeholder="Brief Description of Work" wrap="soft"></textarea>
                <button type="submit" class="submit"> Contact</button>
            <div class="bottom">   
                <p class="bottom-text">We look forward to hearing from you!</p>
            </div>
            </form>
        </div>
</template>

<style>
.contact {
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
/* #description was included before text was replaced for textarea */
#name, #email, #location, #number {
    border-radius: 8px;
    height: 18px;
    width: 13vw;
    font-style: italic;
    padding: 3px;
    padding-left: 6px;
}
/* textarea::-webkit-scrollbar {
    width: 8px;
} */
.top {
    padding-bottom: 1rem;
}
.bottom-text {
    margin-bottom: 0;
}
.submit:hover {
    color: black;
    background-color: lightgray;
    border-radius: 5px;
}
.submit {
    color: black;
    border-radius: 5px;
    margin-top: 16px;
}
.group {
    width: 20vw;
}
.bottom-text {
    font-size: 14px;
    color: rgb(97, 97, 97);
}
/* #description {
    height: 50px;
} */
.text {
    width: 13vw;
    border-radius: 8px;
    border: 2px solid black;
    resize: none;
}
</style>