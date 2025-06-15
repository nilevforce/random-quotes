import quotes from './src/quotes.js';
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';

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

  toggleFavoriteIcon(randomQoute.isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
};

const toggleFavorite = function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote, favoritesContainer);
  }
};

generateBtn.addEventListener('click', generateRandomQoute);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQoute();
