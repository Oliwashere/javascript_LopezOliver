let deck = []; 

function initDeck() { 
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 
        .then(response => response.json())
        .then(data => {
            deck = data.cards; 
        })
}

window.onload = function() {
    initDeck();
}

function dealInitialCards() {
    fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=4`)
        .then(response => response.json())
        .then(data => {
            const playerCards = [data.cards[0], data.cards[2]];
            const dealerCards = [data.cards[1], data.cards[3]];
            console.log('Cartas del jugador:', playerCards);
            console.log('Cartas del crupier:', dealerCards);
        })
}