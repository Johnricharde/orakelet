// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

const answer = [
    "Ja, jeg vet ikke om jeg skal si tror eller håper eller... Eh, ja håper er kanskje riktig!",
    "Uhm, jeg tenkte at det... det er morro å få spørsmål? veldig glad i det åh... Veldig fint at dere er aktive å våkne såå... Har lyst å svar på det spørsmålet.",
    "Eh, ja. Flere spørsmål her. Ja, det må du spørre om utenom? Men det om, det om, men det er bra det! Spør lærerene deres og meg så kommer vi med tips til det"
]


// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
<h1>Terje den Allvitende</h1>
<img src="/img/terje.jpg">
<h3>Still spørsmål i feedback verktøyet:</h3>
<input id="user-input" type="text">
<button onclick="terjeAnswers()">Send</button>
<div id="answer-from-terje"></div>
`
app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////
let answerFromTerje = document.getElementById('answer-from-terje');
let randomNum = "";
let userInput = document.getElementById('user-input');
let previousAnswer = "";





function terjeAnswers() {
    generateRandomNumber()
    while (randomNum == previousAnswer) {
        generateRandomNumber()
    }
    previousAnswer = randomNum;

    answerFromTerje.innerHTML = `<p>${answer[randomNum]}</p>`
    userInput.value = "";
}




function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 3)
}