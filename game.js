var wins = document.querySelector(".wins")
var losses = document.querySelector(".losses")
var health = document.querySelector(".health")
var guess = document.querySelector(".guess")
var win = 0
var lose = 0
var can = 9
var alfabe = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var index = Math.floor(Math.random() * alfabe.length)
var compChoice = alfabe[index]
console.log(compChoice)
var secim = []
function resetGame() {
    index = Math.floor(Math.random() * alfabe.length)
    compChoice = alfabe[index]
    console.log(compChoice)
    guess.innerText = ""
}

window.onkeypress = function (event) {
    if (event.key == compChoice) {
        secim = []
        win++
        wins.innerText = win
        resetGame()
        can = 9
        health.innerText = can
    }
    else {
        if (secim.includes(event.key) == false) {
            secim.push(event.key)
            can--
            health.innerText = can
            guess.innerText += `${event.key},`
            if (can == 0) {
                secim = [];
                lose++
                can = 9
                health.innerText = can
                losses.innerText = lose
                resetGame()

            }
        }

    }
}