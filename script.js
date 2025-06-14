import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

const generateRandomQoute = function generateRandomQoute() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQoute = quotes[currentQuoteIndex];

  const {
    quote,
    author,
  } = randomQoute;

  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  toggleFavoriteBtn.textContent = randomQoute.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  toggleFavoriteBtn.style.display = 'inline-block';
};

const toggleFavorite = function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p class="quote">${currentQuote.quote}</p>
      <p class="quote-author">${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  }

  if (!currentQuote.isFavorite) {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
};

generateBtn.addEventListener('click', generateRandomQoute);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQoute();
