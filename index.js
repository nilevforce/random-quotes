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
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
quoteFavoriteBtn.addEventListener(
  'click',
  () => toggleFavorite(
    currentQuote,
    quoteFavoriteBtn,
    favoritesContainer,
  ),
);

// Get and show quote when app first loads
// handleQuote(quotes, setCurrentQuote);

export { currentQuote, quoteFavoriteBtn };
