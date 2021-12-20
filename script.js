const guessInput = document.querySelector('#guess')
const guessStatus = document.querySelector('#guessStatus')
const guessCounterEl = document.querySelector('#guessCounter')
const guessForm = document.querySelector('#guessForm')

let numToGuess = getRandomNumber(); 
let guessCounter = 0;

function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}

function startNewGame() {
    numToGuess = getRandomNumber();
    guessCounter = 0;
    userGuess = 0;
    guessStatus.innerHTML = `Start guessing!😃`
    guessCounterEl.innerHTML = `No. of Guesses: ${0}`;
    console.clear();
}

function submitGuess() {
    guessCounter++;
    const userGuess = Number(guess.value);
    console.log(userGuess)
    guess.value = ""; //Delete the input-field

    if (userGuess === numToGuess) {
        guessStatus.innerHTML = `${userGuess} is correct!🥳. Press "Restart" to play again!`
        guessCounterEl.innerHTML = `No. of Guesses: ${guessCounter}`
    } else if (userGuess < numToGuess) {
        guessStatus.innerHTML = `${userGuess} is too low!🔻`
        guessCounterEl.innerHTML = `No. of Guesses: ${guessCounter}`
    } else if (userGuess > numToGuess) {
        guessStatus.innerHTML = `${userGuess} is too high!🔺`
        guessCounterEl.innerHTML = `No. of Guesses: ${guessCounter}`
    }
}

guessForm.addEventListener('submit', e => {
    e.preventDefault();
    submitGuess();

})

guessForm.addEventListener('reset', e =>{
    startNewGame(); 
}) 

//Start game 
startNewGame();