const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
  },
  {
    quote: 'Success usually comes to those who are too busy to be looking for it',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'In the middle of difficulty lies opportunity',
    author: 'Albert Einstein',
  },
  {
    quote: 'Whether you think you can or you think you can’t, you’re right',
    author: 'Henry Ford',
  },
  {
    quote: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
  },
  {
    quote: 'It always seems impossible until it’s done',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Don’t count the days, make the days count',
    author: 'Muhammad Ali',
  },
];

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
