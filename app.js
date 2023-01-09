
/* Imports */

/*const { blanchedalmond } = require("color-name")*/

/* Get DOM Elements */

const submitBtn = document.getElementById('submit');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
const resetBtn  = document.getElementById('reset');




/* State */
/*const answers = [
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
/* Events */

submitBtn.addEventListener('click', () => {
    // hide prompt
    // display the image
    toggleSections();
    }
    
    
    function toggleSections() {
        promptSection.classList.toggle('hide');
        fortuneSection.classList.toggle('hide');
    }
    
    
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