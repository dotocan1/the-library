let myLibrary = [];

function Book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
} 

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

myLibrary[0] = new Book('Moja biografija', 'Dominik Otocan', 169, 'read' );
myLibrary[1] = new Book('Moja biografija-drugi deo', 'Dominik Otocan', 251, 'not read' );

const button = document.getElementById('add-book');
button.addEventListener('onclick', function(){
    myLibrary.push(new Book(title, author, numberOfPages, status));
});

console.log(myLibrary[0]);
console.log(myLibrary[1]);