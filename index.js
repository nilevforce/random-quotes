import { handleQuote } from './src/handlers/quote.js';

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', handleQuote);

// Get and show quote when app first loads
handleQuote();
