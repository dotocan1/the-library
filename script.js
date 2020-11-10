let myLibrary = [];
const booksContainer = document.getElementById('books-container');
const newBookForm = document.getElementById('new-book-form');
let idCounter = 0;

//makes the book container invisible
newBookForm.classList.toggle('invisibility');

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', function () {
    //gets values and calls the functions that stores the values
    //into an object and then into an array
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numberOfPages = document.getElementById('numberOfPages').value;
    let book = new Book(title, author, numberOfPages, status);
    myLibrary.push(book);

    //this creates a div for a new book
    let singleBookDiv = document.createElement('div');
    singleBookDiv.classList.add('new-book');
    booksContainer.appendChild(singleBookDiv);
    singleBookDiv.setAttribute('data-id', idCounter);

    //this stores the information into the book card
    let bookTitle = document.createElement('h1');
    singleBookDiv.appendChild(bookTitle);
    bookTitle.textContent = title;

    let bookAuthor = document.createElement('p');
    singleBookDiv.appendChild(bookAuthor);
    bookAuthor.textContent = 'Autor: ' + author;

    let bookNumberOfPages = document.createElement('p');
    singleBookDiv.appendChild(bookNumberOfPages);
    bookNumberOfPages.textContent = 'Broj stranica: ' + numberOfPages;

    //create checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.toggle('checkBox');
    singleBookDiv.appendChild(checkBox);

    let bookStatus = document.createElement('p');
    singleBookDiv.appendChild(bookStatus);
    bookStatus.classList.toggle('book-status');
    bookStatus.setAttribute('data-id', idCounter);

    //creating the delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.toggle('delete-button');
    singleBookDiv.appendChild(deleteButton);
    deleteButton.textContent = 'Delete book';

    //resets values
    newBookForm.classList.toggle('invisibility');
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('numberOfPages').value = '';

    //event delegation for the delete button
    singleBookDiv.addEventListener('click', deleteBook);

    //up the counter for a new book
    idCounter++;
});

const newBookButton = document.getElementById('new-book-button');
newBookButton.addEventListener('click', function () {
    newBookForm.classList.toggle('invisibility');
});

//deletes the selected book or changes status
function deleteBook(evt) {
    //delete button
    if (evt.target.getAttribute('class') == 'delete-button') {
        evt.target.parentElement.remove();
    }
    //checkbox
    else if (evt.target.getAttribute('class') == 'checkBox') {
        let currentId = evt.target.parentElement.dataset.id;
        console.log(currentId);
        bookStatus = document.getElementsByClassName('book-status');
        console.log(bookStatus);

        if (evt.target.checked == true) {
            myLibrary[currentId].status = 'Read';
            
            for (let i = 0; i < bookStatus.length; i++) {
                if (bookStatus[i].dataset.id == currentId)
                    bookStatus[i].textContent = 'Read';
            }
        }
        else {
            myLibrary[currentId].status = 'Not read';
            
            for (let i = 0; i < bookStatus.length; i++) {
                if (bookStatus[i].dataset.id == currentId)
                    bookStatus[i].textContent = 'Not read';
            }
        }

    }
}