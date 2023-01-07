
/* Imports */

/*const { blanchedalmond } = require("color-name")*/

/* Get DOM Elements */

const submitButton = document.getElementById('submit');
const promptPage = document.getElementById('prompt');
const outcomePage = document.getElementById('outcome');
const answerP = document.getElementById('answer');
const resetButton = document.getElementById('reset');
/* State */

/* Events */

submitButton.addEventListener('click', () => {
    toggleSections();
    const randomInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randomInt];
    /*console.log(randomInt);*/
    /*console.log(randomChoice);*/
    /*console.log('answers[12]'), answers[12];*/
    answerP.textContent = randomChoice;
});

resetBtn.addEventListener('click', () => {
    // hide 8 ball and the answer
    // show prompt
});

function toggleSections() {
    promptPage.classList.toggle('hide');
    outcomePage.classList.toggle('hide');
}

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Outlook hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];


/*button clicks for prompt and ask again
hiding 8 ball and random answer
show prompt
hide prompt
show image
pick random number in Array
set p to random answer */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

/* HTML */
/* <!-- h1 Header
 Section
    p tag w/ prompt
    input Bar
    submit btn 
Section 

section
    image of ball 
    p tag with random answer
    ask again button
section */