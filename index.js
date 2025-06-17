/* eslint-disable */
import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite } from './src/handlers/favorites.js';

let currentQuote;

const setCurrentQuote = (qoute) => {
  currentQuote = qoute;
};

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener(
  'click',
  () => handleQuote(quotes, setCurrentQuote),
);

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
favoriteBtn.addEventListener(
  'click',
  () => toggleFavorite(
    currentQuote,
    favoriteBtn,
    favoritesContainer,
  ),
);

// Get and show quote when app first loads
// handleQuote(quotes, setCurrentQuote);

export { currentQuote, favoriteBtn };
