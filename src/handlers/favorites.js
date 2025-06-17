/* eslint-disable */
import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');
const toggleBtn = document.getElementById('toggle-favorite-btn');

const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
};

const toggleFavoriteBtnVisibility = (btn, shouldShow) => {
  btn.classList.toggle('visually-hidden', !shouldShow);
};

const handleFavorite = (isFavorite) => {
  toggleFavoriteBtnVisibility(toggleBtn, true);
  toggleFavoriteIcon(isFavorite, toggleBtn);
};

const showFavoriteCard = ({ text, author }, container) => {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');

  favoriteCard.innerHTML = `
      <p class="quote">${text}</p>
      <p class="quote-author">${author}</p>
    `;

  container.appendChild(favoriteCard);
};

const hideFavoriteCard = ({ text }) => {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
};

const toggleFavorite = () => {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote, favoritesContainer);
  }
};

toggleBtn.addEventListener('click', toggleFavorite);

export {
  handleFavorite,
};
