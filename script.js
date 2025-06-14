const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
];

const qouteElement = document.getElementById('qoute');
const generateBtn = document.getElementById('generate-btn');

const generateRandomQoute = function generateRandomQoute() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQoute = quotes[randomIndex];
  qouteElement.textContent = randomQoute;
};

generateBtn.addEventListener('click', generateRandomQoute);
