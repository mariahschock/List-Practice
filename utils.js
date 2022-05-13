export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderBooks(books) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const a = document.createElement('a');

    div.classList.add('books');

    h1.textContent = books.name;

    img.src = `./assets/${books.name}.png`;

    a.href = `./Books/?id=${books.id}`;

    a.append(h1, img);
    div.append(a);
    return div;
}