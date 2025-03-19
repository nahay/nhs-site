<template>
        <div class="group">
            <form class="contact">
            <div class="top">
                <h1 class="contact-us">Contact Us</h1>
            </div>

            <div class="paragraph">
                <p>If you have any questions, comments or would like to request a quote, please contact us via phone, e-mail or the contact form below.</p>
            </div>
        <div class="contact-socials">
            <div class="info">
                <p>(614) 736-1258</p>
                <p>nahayhomesolutions@gmail.net</p> <!--change to correct number and .com when actually pushing site-->
                <p>Powell, OH 43065</p>
            </div>
            <div class="social-icons">
            <p>PLACEHOLDER FOR SOCIAL ICONS</p>
            </div>
        </div>    
            <div class="first-4">
                <input type="text" placeholder="Name" id="name" class="input"> &nbsp; &nbsp;
                <input type="text" placeholder="Phone Number" id="number" class="number">
                <input type="text" placeholder="E-Mail" id="email" class="email">  &nbsp; &nbsp;
                <input type="text" placeholder="City, State" id="location" class="location">
            </div>
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
.info p{
margin: 1vh;
}
.contact-socials {
    display: flex;
    flex-direction: row;
}
.paragraph {
    font-size: 1.15vw;
}
.first-4 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 35vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
}
.name, .number {
    margin-bottom: 10px;
}
.contact {
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 35vw;
}
/* #description was included before text was replaced for textarea */
#name, #email, #location, #number {
    border-radius: 8px;
    height: 18px;
    width: 14vw;
    font-style: italic;
    padding: 3px;
    padding-left: 6px;
}
/* textarea::-webkit-scrollbar {
    width: 8px;
} */
/* .top {
    padding-bottom: 1rem;
}     */   /* this was to gap the contact us before the paragraph was added */
.submit:hover {
    color: black;
    background-color: lightgray;
    border-radius: 5px;
}
.submit {
    color: black;
    border-radius: 5px;
    margin-top: 2vh;
}
.bottom-text {
    font-size: 14px;
    color: rgb(97, 97, 97);
    margin-bottom: 0;
    margin-top: 2vh;
}
.text {
    width: 30vw;
    border-radius: 8px;
    border: 2px solid black;
    resize: none;
    padding-left: 6px;
}
</style>