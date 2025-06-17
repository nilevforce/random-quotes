/* eslint-disable */
import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';

let currentQuote;

const setCurrentQuote = (qoute) => {
  currentQuote = qoute;
};

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => handleQuote(quotes, setCurrentQuote));

// Get and show quote when app first loads
handleQuote(quotes, setCurrentQuote);

export { currentQuote };
