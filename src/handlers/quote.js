/* eslint-disable */
import { generateRandomInt } from '../utils.js';
import { handleFavorite } from './favorites.js';

const displayQuote = ({ id, text, author, isFavorite }) => {
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('quote-author');

  quoteElement.dataset.jsCurrentQuoteId = id;
  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = author;

  handleFavorite(isFavorite);
};

const chooseRandomQuote = (quotesList) => {
  const randomIndex = generateRandomInt(quotesList.length - 1);
  return quotesList[randomIndex];
};

const handleQuote = (quotes, setCurrentQuote) => {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote);
};

export {
  handleQuote,
};
