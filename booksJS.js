class Book {
    constructor(author, title, pagesRead, hasReadBook) {
        this.author = author;
        this.title = title;
        this.pagesRead = pagesRead;
        this.hasReadBook = hasReadBook;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    createBook() {
        const authorNameInput = document.getElementById("authorName").value.trim();
        const titleInput = document.getElementById("bookTitle").value.trim();
        const pagesRead = document.getElementById("pagesRead").value.trim();
        const readStatusYes = document.getElementById("yesRead").checked;

        // Check for duplicate titles
        if (this.books.some(book => book.title.toLowerCase() === titleInput.toLowerCase())) {
            console.log(`${titleInput} already exists in the library!`);
            alert(`${titleInput} already exists in the library!`);
            return;
        }

        // Create a new book and add to library
        const book = new Book(
            authorNameInput,
            titleInput,
            pagesRead,
            readStatusYes ? "Yes" : "No"
        );

        this.books.push(book);
        console.log(this.books);
        this.addBookToDisplay(book);
        this.off(); // Close overlay after adding the book
    }

    addBookToDisplay(book) {
        const displayArea = document.getElementById("displayArea");

        const bookCardClass = document.createElement("div");
        bookCardClass.setAttribute("class", "cards");

        const bookCardContent = document.createElement("div");
        bookCardContent.setAttribute("id", "cardContent");

        bookCardClass.append(bookCardContent);
        displayArea.append(bookCardClass);

        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPagesRead = document.createElement("p");
        const bookReadStatus = document.createElement("p");

        bookCardContent.append(bookTitle, bookAuthor, bookPagesRead, bookReadStatus);

        bookAuthor.textContent = "Author: " + book.author;
        bookTitle.textContent = book.title;
        bookPagesRead.textContent = "Pages Read: " + book.pagesRead;
        bookReadStatus.textContent = "Finished Book? " + book.hasReadBook;
    }

    libraryLoop() {
        const displayArea = document.getElementById("displayArea");
        displayArea.innerHTML = '';

        this.books.forEach(book => this.addBookToDisplay(book));
    }

    overlayOn() {
        document.getElementById("overlay").style.display = "block";
    }

    off() {
        document.getElementById("overlay").style.display = "none";
    }
}

// Create an instance of the Library class
const myLibrary = new Library();

// Function to handle opening the overlay
function overlayOn() {
    myLibrary.overlayOn();
}

// Function to handle closing the overlay
function off() {
    myLibrary.off();
}

// Function to handle creating a book and updating the display
function createBook() {
    myLibrary.createBook();
}
