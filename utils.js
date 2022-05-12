export function renderBooks(books) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    //const a = document.createElement('a');

    div.classList.add('books');

    h1.textContent = books.name;

    img.src = `./assets/${books.name}.png`;

    div.append(h1, img);
    return div;
}