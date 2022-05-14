import { books } from '../book-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const book = findById(params.get('id'), books);

const bookName = document.getElementById('books');
bookName.textContent = book.name;



const bookImg = document.createElement('img');
bookImg.src = `../assets/${book.name}.png`;

const p = document.createElement('p');
p.textContent = `${book.name} is book number ${book.number} in the series, and is ${book.pages} pages long. Here is a brief summary: ${book.summary}`;

bookName.append(bookImg, p);

