const choices = document.querySelectorAll(".choice");
const choices1 = document.querySelectorAll(".score-board");
const choices2 = document.querySelectorAll(".winmsg");
const wn = document.querySelector("#win");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const userLike = document.querySelector("#ulike");
const compLike = document.querySelector("#clike");


let userScore = 0, compScore = 0;

const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissor"];
    let val = Math.floor(Math.random() * 3);
    return option[val];
}

const showWinner = (win, use, com) => {
    console.log(win, use, com);
    if(win === true) {
        console.log("You won");
        wn.classList.remove("float");
        void wn.offsetWidth;
        wn.classList.add("float");

        wn.innerText = "You Won!";
        wn.style.backgroundColor = "green";
        ++userScore;
        uscore.classList.remove("float");
        void uscore.offsetWidth;
        uscore.classList.add("float");
        uscore.innerText = userScore;
        userLike.style.display = "block";
        compLike.style.display = "block";

        userLike.classList.remove("fade-in");
        void userLike.offsetWidth;
        userLike.classList.add("fade-in");

        compLike.classList.remove("fade-in");
        void compLike.offsetWidth;
        compLike.classList.add("fade-in");

        userLike.innerText = use;
        userLike.style.backgroundColor = "green";
        compLike.innerText = com;
        compLike.style.backgroundColor = "red";
        console.log(userLike.innerText, userLike.style.display);
        console.log(compLike.innerText, compLike.style.display);
    }
    else {
        console.log("Computer won");
        wn.classList.remove("float");
        void wn.offsetWidth;
        wn.classList.add("float");

        wn.innerText = "You Lose";
        wn.style.backgroundColor = "red";
        ++compScore;
        cscore.classList.remove("float");
        void cscore.offsetWidth;
        cscore.classList.add("float");
        cscore.innerText = compScore;
        userLike.style.display = "block";
        compLike.style.display = "block";

        userLike.classList.remove("fade-in");
        void userLike.offsetWidth;
        userLike.classList.add("fade-in");

        compLike.classList.remove("fade-in");
        void compLike.offsetWidth;
        compLike.classList.add("fade-in");

        userLike.innerText = use;
        userLike.style.backgroundColor = "red";
        compLike.innerText = com;
        compLike.style.backgroundColor = "green";
        console.log(userLike.innerText, userLike.style.display);
        console.log(compLike.innerText, compLike.style.display);
    }
}

const playGame = (userChoice) => {
    let userWin = true;

    console.log(userChoice);
    let comChoice = genCompChoice();
    console.log(comChoice);

    if(userChoice === comChoice) {
        console.log("The game was draw");
        wn.classList.remove("float");
        void wn.offsetWidth;
        wn.classList.add("float");

        wn.innerText = "Draw";
        wn.style.backgroundColor = "gray";

        userLike.style.display = "block";
        compLike.style.display = "block";
        userLike.classList.remove("fade-in");
        void userLike.offsetWidth;
        userLike.classList.add("fade-in");

        compLike.classList.remove("fade-in");
        void compLike.offsetWidth;
        compLike.classList.add("fade-in");

        userLike.innerText = userChoice;
        userLike.style.backgroundColor = "gray";
        compLike.innerText = comChoice;
        compLike.style.backgroundColor = "gray";
    }
    else {
        if(userChoice === "Rock") {
            userWin = comChoice === "Scissor" ? true : false;
        }
        else if(userChoice === "Scissor") {
            userWin = comChoice === "Paper" ? true : false;
        }
        else {
            userWin = comChoice === "Rock" ? true : false;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});