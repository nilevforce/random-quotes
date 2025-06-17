/* eslint-disable */
import { favoriteBtn } from '../../index.js';

const toggleFavoriteBtnIcon = (isFavorite, el) => {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
};

const toggleFavoriteBtnVisibility = (btn, shouldShow) => {
  btn.classList.toggle('visually-hidden', !shouldShow);
};

const handleFavorite = (isFavorite) => {
  toggleFavoriteBtnVisibility(favoriteBtn, true);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
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

const toggleFavorite = (quote, btn, container) => {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;

  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard({ text, author }, container);
  } else {
    hideFavoriteCard({ text, author }, container);
  }
};

export {
  handleFavorite,
  toggleFavorite
};
