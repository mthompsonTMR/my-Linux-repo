const API_BASE = 'https://deckofcardsapi.com/api/deck';
let deckId = null; // Store the deck ID
let $btn = null;
let $cardArea = null;

// Initialize the game
function init() {
  $btn = document.getElementById('draw-card-button');
  $cardArea = document.getElementById('card-container');

  // Shuffle a new deck
  fetch(`${API_BASE}/new/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
      $btn.disabled = false; // Enable the draw button
    })
    .catch(error => console.error('Error shuffling the deck:', error));

  // Set up button click event
  $btn.addEventListener('click', drawCard);
}

// Draw a single card
function drawCard() {
  if (!deckId) {
    console.error('Deck ID not found. Shuffle the deck first.');
    return;
  }

  fetch(`${API_BASE}/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      if (data.remaining === 0) {
        alert('All cards have been drawn! Resetting the game.');
        resetGame();
        return;
      }

      let card = data.cards[0];
      renderCard(card);
    })
    .catch(error => console.error('Error drawing card:', error));
}

// Render a single card with slight offsets
function renderCard(card) {
  const cardImg = document.createElement('img');
  cardImg.src = card.image;

  // Apply random rotation and slight positional offset
  const angle = Math.random() * 90 - 45; // Random angle between -45 and 45 degrees
  const randomX = Math.random() * 40 - 20; // Random horizontal offset between -20 and 20px
  const randomY = Math.random() * 40 - 20; // Random vertical offset between -20 and 20px

  cardImg.style.position = 'absolute';
  cardImg.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;

  $cardArea.appendChild(cardImg);
}

// Reset the game by clearing the screen and reshuffling the deck
function resetGame() {
  $cardArea.innerHTML = ''; // Clear all cards
  deckId = null;

  // Shuffle a new deck
  fetch(`${API_BASE}/new/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
      $btn.disabled = false; // Enable the draw button again
    })
    .catch(error => console.error('Error resetting the game:', error));
}

// Initialize the game on page load
init();
