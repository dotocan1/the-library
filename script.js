let myLibrary = [];
const booksContainer = document.getElementById('books-container');
const newBookContainer = document.getElementById('new-book-container');

//makes the book container invisible
newBookContainer.classList.toggle('invisibility');

function Book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// myLibrary[0] = new Book('Moja biografija', 'Dominik Otocan', 169, 'read');
// myLibrary[1] = new Book('Moja biografija-drugi deo', 'Dominik Otocan', 251, 'not read');

const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', function () {
    //gets values and calls the functions that stores the values
    //into an array
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numberOfPages = document.getElementById('numberOfPages').value;
    status = document.getElementById('status').value;
    myLibrary.push(title, author, numberOfPages, status);

    //this creates a div for a new book
    let singleBookDiv = document.createElement('div');
    singleBookDiv.classList.add('starter-book');
    booksContainer.appendChild(singleBookDiv);

    let bookTitle = document.createElement('h1');
    singleBookDiv.appendChild(bookTitle);
    bookTitle.textContent = title;

    let bookAuthor = document.createElement('p');
    singleBookDiv.appendChild(bookAuthor);
    bookAuthor.textContent = author;

    let bookNumberOfPages = document.createElement('p');
    singleBookDiv.appendChild(bookNumberOfPages);
    bookNumberOfPages.textContent = numberOfPages;

    let bookStatus = document.createElement('p');
    singleBookDiv.appendChild(bookStatus);
    bookStatus.textContent = status;

    const deleteButton = document.createElement('button');
    singleBookDiv.appendChild(deleteButton);
    deleteButton.textContent = 'Delete book';

    newBookContainer.classList.toggle('invisibility');
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('numberOfPages').value = '';
    document.getElementById('status').value = '';
});

const newBookButton = document.getElementById('new-book-button');
newBookButton.addEventListener('click', function(){
    newBookContainer.classList.toggle('invisibility'); 
})