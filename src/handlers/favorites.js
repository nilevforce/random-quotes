/* eslint-disable */
import { quoteFavoriteBtn } from '../../index.js';

const toggleFavoriteBtnIcon = (isFavorite) => {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
};

const toggleFavoriteBtnVisibility = (btn, shouldShow) => {
  btn.classList.toggle('visually-hidden', !shouldShow);
};

const handleFavorite = (isFavorite) => {
  toggleFavoriteBtnVisibility(quoteFavoriteBtn, true);
  toggleFavoriteBtnIcon(isFavorite);
};

const removeFavoriteQuote = (quote) => {
  quote.isFavorite = false;
  removeFavoriteCard(quote.id);

  const currentQuote = document.querySelector('[data-js-current-quote-id]');
  const currentQuoteId = currentQuote.dataset.jsCurrentQuoteId;

  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
};

const showFavoriteCard = (quote, container) => {
  const { id, text, author } = quote;

  const favoriteCard = document.createElement('div');
  favoriteCard.dataset.jsFavoriteQuoteId = id;
  favoriteCard.classList.add('favorite-card');

  favoriteCard.innerHTML = `
    <div class="favorite-card-content">
      <p class="">${text}</p>
      <p class="favorite-card-author">${author}</p>
    </div>
    <button class="btn btn-danger">
      Remove from favorites
      <i class="far fa-trash-alt"></i>
    </button>
  `;

  container.appendChild(favoriteCard);

  const removeBtn = favoriteCard.querySelector('.btn-danger');
  removeBtn.addEventListener('click', () => removeFavoriteQuote(quote));
};

const removeFavoriteCard = (id) => {
  const card = document.querySelector(`[data-js-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
};

const toggleFavorite = (quote, btn, container) => {
  quote.isFavorite = !quote.isFavorite;
  const { id, isFavorite } = quote;

  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(quote.id);
  }
};

export {
  handleFavorite,
  toggleFavorite,
};
