// Create variables for the game state
let player1Score = 0
let player1 = ''
let player2 = ''
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const main = document.getElementById("container")

const player1Name = document.getElementById('player1name')
const player2Name = document.getElementById('player2name')
const beginGame = document.getElementById('begin')
const name = document.getElementById('names')

const confetti = document.getElementById('confetti')


//const rollBtnTurn = document.getElementById('rollBtnTurn')
//const playerTurn = document.getElementById("playerturn")
//const turnMessage = document.getElementById("turnmessage")
//const startGame = document.getElementById("start")
//const popUp = document.getElementById("popUp")


function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
/*function decideTurn(){
    const randomNumber = Math.floor(Math.random() * 2)
    if(randomNumber === 0)
    {
        playerTurn.textContent = randomNumber
        turnMessage.textContent = `${player1} will go First `
    }
    else{
        playerTurn.textContent = randomNumber
        turnMessage.textContent = `${player2} will go First `
    }
}*/

/*save names of players */
beginGame.addEventListener('click',function(){
    player1 = player1Name.value
    player2 = player2Name.value
    if(player1 != '' && player2 != ''){
        name.style.display = "none"
        main.style.display = "block"
        //message.textContent = `It's ${player1}'s Turn `
    }
    message.textContent = `It's ${player1}'s Turn `
    message.classList.add('rotate')
})

/* Roll the dice for player turn event listener */
/*rollBtnTurn.addEventListener('click',function(){
    decideTurn()
})
startGame.addEventListener('click', function(){
    popUp.style.display = "none"
    main.style.display = "block"
})
if(playerTurn.value === 0)
    {
        player1Turn = true
        message.textContent = `It's ${player2}'s Turn `
    }
    else if(playerTurn.value === 1){
        player1Turn = false
        message.textContent = `It's ${player1}'s Turn `
    }*/

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Scoreboard.classList.add('rotate')
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `It's ${player2}'s Turn `
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Scoreboard.classList.add('rotate')
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `It's ${player1}'s Turn `
    }
    
    if (player1Score >= 20) {
        message.textContent = `${player1} Won 🥳`
        confetti.style.display = 'flex'
        setTimeout(() => {
        confetti.style.display = "none"
        }, 6000)
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = `${player2} Won 🥳`
        confetti.style.display = 'flex'
        setTimeout(() => {
        confetti.style.display = "none"
        }, 6000)
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = ''
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    name.style.display = "block"
    main.style.display = "none"
    confetti.style.display = 'none'
    player1Name.value = ''
    player2Name.value = ''
    message.classList.remove('rotate')
}
