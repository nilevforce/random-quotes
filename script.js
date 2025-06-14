import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

const generateRandomQoute = function generateRandomQoute() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQoute = quotes[randomIndex];

  const {
    quote,
    author,
  } = randomQoute;

  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
};

generateBtn.addEventListener('click', generateRandomQoute);
