
console.log("working")

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
let questionnumber = 0
let score = 0
const levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000]
const displayquestion = document.getElementById("displayquestion")
const next = document.getElementById("nextbutton")
const quiz = [
    {
        question: "1)what is the capital of India ?",
        options: ["A) chennai", "B) delhi", "C) bombay", "D) madrid"],
        correct: "B) delhi"
    },
    {
        question: "2) who is the captain of Indian Cricket Team ?",
        options: ["A) rahane", "B) gill", "C) kohli", "D) dhoni"],
        correct: "D) dhoni"
    },
    {
        question: "3) srks first film ? ",
        options: ["A) pathan", "B) deewana", "C) don", "D)ddlj "],
        correct: "B) deewana"
    },
    {
        question: "4) How many States does India had ?",
        options: ["A) 21", "B) 34", "C) 31", "D) 28"],
        correct: "C) 31"
    },
    {
        question: "5) which college awarded nirf 1 in 2023 ?",
        options: ["A) iitb", "B) iitd", "C) iitm", "D) iitk"],
        correct: "C) iitm"
    },
    {
        question: "6) which planet is knwon as red planet ?",
        options: ["A) Venus", "B) mars", "C)jupiter", "D) saturn"],
        correct: "B) mars"
    },
    {
        question: "7) which scientist developed the theory of relativity ?",
        options: ["A) isaac Newton", "B) albert einstein", "C) galileo", "D) tesla"],
        correct: "B) albert einstein"
    },
    {
        question: "8) what is the currency of france ?",
        options: ["A) Pound sterling", "B) Euro", "C) Dollar", "D) yen"],
        correct: "B) Euro"
    },
    {
        question: "9) who wrote the play Romeo and Juliet ?",
        options: ["A) williamshakesphere", "B) rohitshetty", "C) mark twain", "D) jain austen"],
        correct: "A) williamshakesphere"
    },
    {
        question: "10) what is the national flower of japan ?",
        options: ["A) cherry blossom", "B) rose", "C) lilly", "D) lotus"],
        correct: "A) cherry blossom"
    },
    {
        question: "11) In which year did the french revolution begin ?",
        options: ["A) 1749", "B) 1889", "C) 1789", "D) 1709"],
        correct: "C) 1789"
    },
    {
        question: "12) who was the first woman to win noble prize ?",
        options: ["A) rosalind franklin", "B) mother teresa", "C) marie curie", "D) jain watson"],
        correct: "C) marie curie"
    },
    {
        question: "13) who wrote the philosophical work 'medications' while serving as roman ?",
        options: ["A) alexander", "B) seneca", "C) plato", "D) marcus allelious"],
        correct: "D) marcus allelious"
    },
    {
        question: "14) what is the largest species of shark ?",
        options: ["A) whale shark", "B) tiger shark", "C) greatwhite shark", "D) Hammerhead Shark"],
        correct: "A) whale shark"
    },
    {
        question: "15) In which year did the chernobyl disaster occur ?",
        options: ["A) 1996", "B) 1986", "C) 2006", "D) 1976"],
        correct: "B) 1986"
    }
]
const questionquiz = document.getElementById("question")
const option = document.getElementById("option")
let amount = levels[score]


function showquestion() {
    const amount = levels[score]
    const getquestion = quiz[questionnumber]
    questionquiz.innerHTML = getquestion.question
    option.innerHTML = ""
    displayquestion.innerHTML = `Qusetion for  Rs ${amount} /-`
    const array = getquestion.options
    for (let index = 0; index < array.length; index++) {
        const solution = array[index]
        const button = document.createElement("button")
        button.innerText = solution
        button.addEventListener("click", checkanswer)
        option.appendChild(button)
    }

}

function checkanswer(event) {
    const getquestion = quiz[questionnumber]
    const selectoption = event.target.innerText
    if (selectoption === getquestion.correct) {
        event.target.style.background = "cadetblue"
        document.getElementById("prize").innerText = "Correct option"
        document.getElementById("correct").innerText = `congratulations you had won Rs ${amount} /-`
        questionnumber++
        score++
    }

    else {
        if (questionnumber > 4 && questionnumber < 9) {
            amount = 10000
        }
        else if (questionnumber > 9 && questionnumber <= levels.length) {
            amount = 320000
        }
        else if (questionnumber === 0) {
            amount = 0
        }
        else {
            amount = levels[score - 1]
        }
        event.target.style.background = "tomato"
        document.getElementById("correct").innerText = "wrong option"
        document.getElementById("game").innerHTML = "Game Over!!"
        document.getElementById("wrong").innerHTML = `you can take money with you is Rs ${amount} /-`
        // document.getElementById("game").style.color = "red"
        next.style.display = "none"

    }
}

next.addEventListener("click", checkanswer => {
    document.getElementById("correct").innerHTML = ""
    document.getElementById("prize").innerHTML = ""
    if (questionnumber < quiz.length) {
        showquestion()
    }
    else {
        money = levels[score - 1]
        questionquiz.innerHTML = "quiz over"
        option.innerHTML = ""
        next.style.display = "none"
        displayquestion.innerHTML = ""
        document.getElementById("correct").innerHTML = `you had won Rs ${money} /-`
    }

})

showquestion()