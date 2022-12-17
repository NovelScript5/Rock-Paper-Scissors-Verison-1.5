const ComputerChoiceEl = document.getElementById("ComputerChoiceEl")
const UserChoiceEl = document.getElementById("UserChoiceEl")
const WinnerEl = document.getElementById("Winner")
const ComputerScoreEl = document.getElementById("ComputerScoreEl")
const PlayerScoreEl = document.getElementById("PlayerScoreEl")
const GameWrapper = document.querySelector(".GameWrapper")

let UserScore = 0
let ComputerScore = 0

let UserChoice
let ComputerChoice
const Choices = ["Rock","Paper","Scissors"] 

const Buttons = Array.from(document.querySelectorAll("button"))

Buttons.forEach(Button => {  

        Button.addEventListener("click", () => {

            UserChoice = Button.id
            console.log(UserChoice)
            GenerateComputerChoice()
            CheckWinner()
            EndGame()
    
        })


})

function GenerateComputerChoice() {

    ComputerChoice = (Math.floor(Math.random() * 3))

    ComputerChoice = Choices[ComputerChoice]

    console.log(ComputerChoice)

}

function CheckWinner() {

    if (ComputerChoice === UserChoice) {

        ComputerChoiceEl.innerHTML = `Computer Choice is ${ComputerChoice}` 
        UserChoiceEl.innerHTML = `Player Choice is ${UserChoice}`
        WinnerEl.innerHTML = "It's a Draw"

    } else if (ComputerChoice === "Rock" && UserChoice === "Scissors") {

        ComputerChoiceEl.innerHTML = `Computer Choice is ${ComputerChoice}` 
        UserChoiceEl.innerHTML = `Player Choice is ${UserChoice}`
        WinnerEl.innerHTML = "Computer Win"
        ComputerScore += 1
        ComputerScoreEl.innerHTML = ComputerScore

    } else if (ComputerChoice === "Paper" && UserChoice === "Rock") {

        ComputerChoiceEl.innerHTML = `Computer Choice is ${ComputerChoice}` 
        UserChoiceEl.innerHTML = `Player Choice is ${UserChoice}`
        WinnerEl.innerHTML = "Computer Win"
        ComputerScore += 1
        ComputerScoreEl.innerHTML = ComputerScore
        

    } else if (ComputerChoice === "Scissors" && UserChoice === "Paper") {

        ComputerChoiceEl.innerHTML = `Computer Choice is ${ComputerChoice}` 
        UserChoiceEl.innerHTML = `Player Choice is ${UserChoice}`
        WinnerEl.innerHTML = "Computer Win"
        ComputerScore += 1
        ComputerScoreEl.innerHTML = ComputerScore

    } else {

        ComputerChoiceEl.innerHTML = `Computer Choice is ${ComputerChoice}` 
        UserChoiceEl.innerHTML = `Player Choice is ${UserChoice}`
        WinnerEl.innerHTML = "Player Win"
        UserScore += 1
        PlayerScoreEl.innerHTML = UserScore

    }
}

function EndGame() {

    if (UserScore === 10 || ComputerScore === 10) {
        
        Buttons.forEach(Button => {
            Button.disabled = true
        })

        if (UserScore > ComputerScore) {

            WinnerEl.innerHTML = `Game Has Ended. Player Has Won the Game`

        } else if (ComputerScore > UserScore) {

            WinnerEl.innerHTML = `Game Has Ended. Computer Has Won the Game `

        }

        const Refresh = document.createElement("button")
        Refresh.setAttribute("id","Refresh")
        Refresh.innerHTML = `<svg  width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.65 2.35C12.9099 1.60485 12.0296 1.01356 11.0599 0.61023C10.0902 0.2069 9.05024 -0.000495309 8 -6.88295e-08C5.87827 -6.88295e-08 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C13.2381 11.1695 12.4733 12.1824 11.4613 12.8988C10.4493 13.6153 9.23994 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V-6.88295e-08L13.65 2.35Z" fill="black"/></svg>`
        GameWrapper.appendChild(Refresh)

        Refresh.addEventListener("click", () => {

            location.reload()

        })
    }

}