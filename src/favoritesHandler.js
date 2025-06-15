const showFavoriteCard = (
  {
    quote,
    author,
  },
  container,
) => {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');

  favoriteCard.innerHTML = `
      <p class="quote">${quote}</p>
      <p class="quote-author">${author}</p>
    `;

  container.appendChild(favoriteCard);
};

const hideFavoriteCard = ({ quote }) => {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
};

const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
};

export {
  showFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteIcon,
};
