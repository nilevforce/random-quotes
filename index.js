import { generateRandomInt } from './src/utils.js';
import quotes from './src/quotes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

const generateRandomQoute = () => {
  const randomIndex = generateRandomInt(quotes.length - 1);
  currentQuoteIndex = randomIndex;

  const { quote, author, isFavorite } = quotes[currentQuoteIndex];

  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
};

const toggleFavorite = () => {
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
