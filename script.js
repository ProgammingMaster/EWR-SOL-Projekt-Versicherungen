const abspannElement = document.getElementById('abspannElement');
    const textArray = [
        'Arbeitslos',
        'Autounfall',
        'Bandscheibenvorfall',
        'Chemieexplosion',
        'Diebstahl',
        'Einbruch'
    ];

    let index = 0;

    function changeText() {
        abspannElement.style.opacity = 0; // Setzen Sie die Opazität auf 0 vor dem Ändern des Textes
        setTimeout(() => {
            abspannElement.textContent = textArray[index];
            index = (index + 1) % textArray.length;
            abspannElement.style.opacity = 1; // Setzen Sie die Opazität auf 1 nach dem Ändern des Textes
        }, 1000); // Warten Sie 1000 Millisekunden (1 Sekunde) vor dem erneuten Anzeigen
    }

    setInterval(changeText, 3000); // Ändert den Text alle 3 Sekunden

const questions = [
    {
        question: "Wofür gibt es Sachversicherungen?",
        answers: [
            {text: "'Risiken, die sich auf einzelne Personen beziehen.'", correct: false},
            {text: "'Risiken, die sich auf Eigentümer beziehen.'", correct: true},
            {text: "'Risiken, die sich auf fremde Handys beziehen.'", correct: false},
        ]
    },
    {
        question: "Was bedeutet 'Versicherungsprämie'?",
        answers: [
            {text: "Der Preis für die jeweilige Versicherung", correct: true},
            {text: "Das Geld, das man von der Versicherung bei einem Schadensfall bezahlt bekommt", correct: false},
            {text: "Die Vertragsdetails zur jeweiligen Versicherung", correct: false},
        ]
    },
    {
        question: "Wie viel bezahlt ein durchschnittlicher Schweizer pro Jahr für Versicherungen?",
        answers: [
            {text: "Über 3'000", correct: false},
            {text: "Über 5'000", correct: false},
            {text: "Über 12'000", correct: true},
        ]
    },
    {
        question: "Welche Privatpersonen profitieren im Normalfall am meisten von Versicherungen?",
        answers: [
            {text: "Ältere Menschen", correct: false},
            {text: "Menschen, die ein höheres Risiko haben, von unerwarteten Ereignissen betroffen zu sein", correct: true},
            {text: "Menschen, die viel Geld besitzen", correct: false},
        ]
    },
    {
        question: "Wenn ein Versicherungsfall eintrifft, was sollte man zuerst machen?",
        answers: [
            {text: "Polizei anrufen", correct: false},
            {text: "Schaden dokumentieren", correct: true},
            {text: "Die Versicherungshotline anrufen ", correct: false},
        ]
    },
    {
        question: "Welche dieser Versicherungen ist obligatorisch?",
        answers: [
            {text: "Berufsunfallversicherung", correct: true},
            {text: "Reisekrankheitenversicherung", correct: false},
            {text: "Reisegepäckversicherung", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);   
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Agian";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();