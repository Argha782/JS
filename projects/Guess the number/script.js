let randomNum = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#sbt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true
if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //  validates whether number is within 0 and 100
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number smaller than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess) {
            displayGuess(guess)
            displayMsg(`Game Over, Random Number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    //  checks whether the guess is equal to the random number or 
    if (guess === randomNum) {
        displayMsg(`You guessed it right`)
        endGame()
    }
    else if (guess < randomNum) {
        displayMsg(`You guess is too low`)
    }
    else if (guess > randomNum) {
        displayMsg(`You guess is too high`)
    }
}
function displayGuess(guess) {
    //   displays a message
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remain.innerHTML = `${11 - numGuess}`
}
function displayMsg(message) {
    //   it will clean the values and update the guesses
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    //   to end the game
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`
    startOver.appendChild(p)
    playGame = false;
    newGame();  
}
function newGame() {
    //   to start a new game
    const gameButton = document.querySelector('#newGame')
    gameButton.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '';
        remain.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
} 

