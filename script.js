let myLibrary = [];
const booksContainer = document.getElementById('books-container');
const newBookContainer = document.getElementById('new-book-container');

//makes the book container invisible
newBookContainer.classList.toggle('invisibility');

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    //this.status = status;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', function () {
    //gets values and calls the functions that stores the values
    //into an array
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numberOfPages = document.getElementById('numberOfPages').value;
    //status = document.getElementById('status').value;
    myLibrary.push(title, author, numberOfPages);

    //this creates a div for a new book
    let singleBookDiv = document.createElement('div');
    singleBookDiv.classList.add('new-book');
    booksContainer.appendChild(singleBookDiv);
    //this stores the information into the book card
    let bookTitle = document.createElement('h1');
    singleBookDiv.appendChild(bookTitle);
    bookTitle.textContent = title;

    let bookAuthor = document.createElement('p');
    singleBookDiv.appendChild(bookAuthor);
    bookAuthor.textContent = 'Autor: ' +author;

    let bookNumberOfPages = document.createElement('p');
    singleBookDiv.appendChild(bookNumberOfPages);
    bookNumberOfPages.textContent = 'Broj stranica: ' + numberOfPages;

    // let bookStatus = document.createElement('p');
    // singleBookDiv.appendChild(bookStatus);
    // bookStatus.textContent = status;

    //create checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    singleBookDiv.appendChild(checkBox);

    //creating the delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.toggle('delete-button');
    singleBookDiv.appendChild(deleteButton);
    deleteButton.textContent = 'Delete book';

    //resets values
    newBookContainer.classList.toggle('invisibility');
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('numberOfPages').value = '';
    //document.getElementById('status').value = '';

    //event delegation for the delete button
    singleBookDiv.addEventListener('click', deleteBook);
    console.log('hey');
});

const newBookButton = document.getElementById('new-book-button');
newBookButton.addEventListener('click', function () {
    newBookContainer.classList.toggle('invisibility');
});

//deletes the selected book
function deleteBook(evt) {
    if (evt.target.getAttribute('class') == 'delete-button') {
        evt.target.parentElement.remove();
    }
}