const buttonSun = document.querySelector('.buttonSun');
const buttonPlum = document.querySelector('.buttonPlum');
const buttonWine = document.querySelector('.buttonWine');
const buttonTree = document.querySelector('.buttonTree');
const buttonBlue = document.querySelector('.buttonBlue');
const header = document.querySelector('header'); 
const sections = document.querySelectorAll('section'); 
const buttons = document.querySelectorAll('button');

function changeColors(bodyColor, headerColor, sectionColor, buttonColor) {
    document.body.style.backgroundColor = bodyColor;
    header.style.backgroundColor = headerColor;

    sections.forEach((section) => {
        section.style.backgroundColor = sectionColor;
    });

    buttons.forEach((button) => {
        if (!button.classList.contains('noChange')) {
            button.style.backgroundColor = buttonColor;
        }
    });

    currentCardColor = buttonColor;
    updateCardColors();
}

buttonSun.addEventListener('click', () => changeColors('#E78905', '#985900', '#CC9E5E','#CA892E'));
buttonPlum.addEventListener('click', () => changeColors('#743682', '#3E1647','#63356D','#4C1158'));
buttonWine.addEventListener('click', () => changeColors('#392D32', '#302026','#524449','#904747'));
buttonTree.addEventListener('click', () => changeColors('#368256', '#1E452E','#3F7053','#1B5533'));
buttonBlue.addEventListener('click', () => changeColors('#4A6B7D', '#243945','#486575','#213F50'));


////////////////////////////////////////////


const image = document.getElementById('picture');
const blurButton = document.getElementById('blur');
const brighnessButton = document.getElementById('brighness');
const contrastButton = document.getElementById('contrast');
const dropShadowButton = document.getElementById('dropShadow');
const grayscaleButton = document.getElementById('grayscale');
const hueRotateButton = document.getElementById('hueRotate');
const invertButton = document.getElementById('invert');
const opacityButton = document.getElementById('opacity');
const saturateButton = document.getElementById('saturate');
const sepiaButton = document.getElementById('sepia');

blurButton.addEventListener('click', () => {
    image.style.filter = 'blur(10px)';
});

brighnessButton.addEventListener('click', () => {
    image.style.filter = 'brightness(50%)';
});

contrastButton.addEventListener('click', () => {
    image.style.filter = 'contrast(10000000000000000000000000000000000000000000%)';
});

dropShadowButton.addEventListener('click', () => {
    image.style.filter = 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))';
});

grayscaleButton.addEventListener('click', () => {
    image.style.filter = 'grayscale(100%)';
});

hueRotateButton.addEventListener('click', () => {
    image.style.filter = 'hue-rotate(90deg)';
});

invertButton.addEventListener('click', () => {
    image.style.filter = 'invert(100%)';
});

opacityButton.addEventListener('click', () => {
    image.style.filter = 'opacity(50%)';
});

saturateButton.addEventListener('click', () => {
    image.style.filter = 'saturate(150%)';
});

sepiaButton.addEventListener('click', () => {
    image.style.filter = 'sepia(100%)';
});

//////////////////////////////////////////////

const pictures = [
    'pictures/picture1.jpg',
    'pictures/picture2.jpg',
    'pictures/picture3.jpg',
    'pictures/picture4.jpg',
    'pictures/picture5.jpg',
    'pictures/picture6.jpg',
    'pictures/picture7.jpg',

];

let currentIndex = 0;

const sliderImage = document.getElementById('picture1');
const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
const dotsContainer = document.getElementById('dotsContainer');


pictures.forEach((index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index == 0) {
        dot.classList.add('active');
    }
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderImage.src = pictures[currentIndex];

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

buttonPrev.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? pictures.length - 1 : currentIndex - 1;
    updateSlider();
});

buttonNext.addEventListener('click', function() {
    currentIndex = (currentIndex === pictures.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});



/////////////////////////////////////////////


const cardValues = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
let flippedCards = [];
let matchedPairs = 0;
let currentCardColor = '#904747';

const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
const message = document.getElementById('message');

function shuffleCards() {
    return cardValues.sort(() => 0.5 - Math.random());
}

function updateCardColors() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.style.backgroundColor = currentCardColor;
    });
}

function initializeBoard() {
    gameBoard.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];
    message.textContent = '';
    
    const shuffledValues = shuffleCards();
    shuffledValues.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.style.backgroundColor = currentCardColor;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains('matched')) return;

    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedPairs++;
        if (matchedPairs === cardValues.length / 2) {
            message.textContent = 'Ви виграли!';
        }
    } else {
       card1.classList.remove('flipped');
       card1.textContent = '';
       card2.classList.remove('flipped');
       card2.textContent = '';
    }

    flippedCards = [];
}

function startTimer(seconds) {
    let timeLeft = seconds;
    timerInterval = setInterval(() => {
        message.textContent = `Час: ${timeLeft} секунд`;
        timeLeft--;
        
        if (timeLeft < 0 || matchedPairs === cardValues.length / 2) {
            clearInterval(timerInterval);
            gameBoard.style.pointerEvents = 'none';
            message.textContent = matchedPairs === cardValues.length / 2 ? 'Ви виграли!' : 'Час вичерпано!';
        }
    }, 1000);
}

function startGame() {
    gameBoard.classList.remove('hidden'); 
    gameBoard.style.pointerEvents = 'auto'; 
    initializeBoard();
    startTimer(60); 
}

startButton.addEventListener('click', startGame)

//////////////////////////////////////

let questions = [
    { question: "Яка змінна є глобальною?", 
        options: ["const", "var", "let"], 
        correct: "var" },

    { question: "Що таке замикання?", 
        options: ["Функція", "Блок коду", "Скорочення"], 
        correct: "Функція" },

    { question: "Що таке promise?", 
        options: ["Колбек", "Метод", "Об'єкт"], 
        correct: "Об'єкт" }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    let questionText = document.getElementById('questionText');
    let quizForm = document.getElementById('quizForm');
    questionText.textContent = questions[currentQuestionIndex].question;
    
    quizForm.innerHTML = "";
    questions[currentQuestionIndex].options.forEach(option => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        quizForm.appendChild(label);
        quizForm.appendChild(document.createElement('br'));
    });
}

function nextQuestion() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption.value === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionContainer').style.display = "none";
    document.getElementById('results').style.display = "block";
    document.getElementById('scoreText').textContent = `Ви отримали ${score} з ${questions.length}`;
}

