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

const showFavoriteCard = ({ id, text, author }, container) => {
  const favoriteCard = document.createElement('div');
  favoriteCard.dataset.jsQuoteId = id;
  favoriteCard.classList.add('favorite-card');

  favoriteCard.innerHTML = `
      <p class="quote">${text}</p>
      <p class="quote-author">${author}</p>
    `;

  container.appendChild(favoriteCard);
};

const hideFavoriteCard = ({ id }) => {
  const card = document.querySelector(`.favorite-card[data-js-quote-id="${id}"]`)
  if (card) {
    card.remove()
  }
};

const toggleFavorite = (quote, btn, container) => {
  quote.isFavorite = !quote.isFavorite;
  const { id, text, author, isFavorite } = quote;

  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard({ id, text, author }, container);
  } else {
    hideFavoriteCard({ id }, container);
  }
};

export {
  handleFavorite,
  toggleFavorite
};
