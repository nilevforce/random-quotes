/* eslint-disable */
import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils.js';
import { handleFavorite } from './favorites.js';

let currentQuote;

const displayQuote = ({ text, author, isFavorite }) => {
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');

  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;

  handleFavorite(isFavorite);
};

const chooseRandomQuote = (quotesList) => {
  const randomIndex = generateRandomInt(quotesList.length - 1);
  return quotesList[randomIndex];
};

const handleQuote = () => {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
};

export {
  handleQuote,
  currentQuote,
};
