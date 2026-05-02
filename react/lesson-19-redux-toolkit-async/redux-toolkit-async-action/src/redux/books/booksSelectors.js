export const selectBooks = store => store.books;

export const selectFavoriteBooks = store => store.books.items.filter(item => item.favorite);