let deckId;
let cards = [];

async function startGame() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    deckId = data.deck_id;
    await drawCards();
}

async function drawCards() {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=32`);
    const data = await response.json();
    const drawnCards = data.cards.slice(0, 16);
    cards = [...drawnCards, ...drawnCards];
    shuffleArray(cards);
    displayCards();
}

function displayCards() {
    const cartas = document.getElementById('cartasid');
    cartas.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.dataset.value = card.value;
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.code;
        img.style.width = '100%'; // Ajusta la imagen al 100% del ancho del contenedor
        img.style.height = '100%'; // Ajusta la imagen al 100% de la altura del contenedor
        cardElement.appendChild(img);
        cardElement.addEventListener('click', () => revealCard(cardElement));
        cartas.appendChild(cardElement);
    });
}

let firstCard = null;
let secondCard = null;

function revealCard(cardElement) {
    if (firstCard === null) {
        firstCard = cardElement;
        firstCard.style.backgroundColor = 'white';
    } else if (secondCard === null && cardElement !== firstCard) { // Evita que se haga clic en la misma carta dos veces
        secondCard = cardElement;
        secondCard.style.backgroundColor = 'white';
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        setTimeout(() => {
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            firstCard = null;
            secondCard = null;
            checkWin();
        }, 1000);
    } else {
        setTimeout(() => {
            firstCard.style.backgroundColor = 'lightgray';
            secondCard.style.backgroundColor = 'lightgray';
            firstCard = null;
            secondCard = null;
        }, 1000);
    }
}

function checkWin() {
    const remainingCards = document.querySelectorAll('.card:not([style*="visibility: hidden"])');
    if (remainingCards.length === 0) {
        alert('¡Felicidades! Has ganado el juego.');
    }
}

function resetGame() {
    startGame();
}

// Función para mezclar el array de cartas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

startGame();
