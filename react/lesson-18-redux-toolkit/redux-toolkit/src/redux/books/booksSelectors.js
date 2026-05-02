export const selectBooks = store => store.books;

export const selectFavoriteBooks = store => store.books.filter(item => item.favorite);