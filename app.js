import { books } from './book-data.js';
import { renderBooks } from './utils.js';

const bookList = document.getElementById('books');

for (let book of books) {
    const bookDiv = renderBooks(book);
    bookList.append(bookDiv);
}

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
