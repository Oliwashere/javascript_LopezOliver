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
