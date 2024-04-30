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
}