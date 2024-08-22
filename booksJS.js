const myLibrary = [];

function createBook() {
    let readStatus;
    let authorNameInput = document.getElementById("authorName").value.trim();
    let titleInput = document.getElementById("bookTitle").value.trim();
    let pagesRead = document.getElementById("pagesRead").value.trim();
    let readStatusYes = document.getElementById("yesRead");

    if (readStatusYes.checked) {
        readStatus = "Yes";
    } else {
        readStatus = "No";
    }


    let titleExists = myLibrary.some(book => book.title.toLowerCase() === titleInput.toLowerCase());

    if (titleExists) {
        console.log(titleInput + " already exists in the library!");
        alert(titleInput + " already exists in the library!"); 
        return; 
    }

    const book = {
        author: authorNameInput,
        title: titleInput,
        pagesRead: pagesRead,
        hasReadBook: readStatus
    };

    myLibrary.push(book);
    console.log(myLibrary);
    addBookToDisplay(book); 
}

function addBookToDisplay(book) {
    let displayArea = document.getElementById("displayArea");

    let bookCardClass = document.createElement("div");
    bookCardClass.setAttribute("class", `cards`);

    displayArea.append(bookCardClass);

    let bookCardContent = document.createElement("div");
    bookCardContent.setAttribute("id", `cardContent`);

    bookCardClass.append(bookCardContent);

    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPagesRead = document.createElement("p");
    let bookReadStatus = document.createElement("p");

    bookCardContent.append(bookTitle, bookAuthor, bookPagesRead, bookReadStatus);

    bookAuthor.textContent = "Author: " + book.author;
    bookTitle.textContent = book.title;
    bookPagesRead.textContent = "Pages Read: " + book.pagesRead;
    bookReadStatus.textContent = "Finished Book? " + book.hasReadBook;
}

function libraryLoop() {
    let displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = ''; 

    for (let i = 0; i < myLibrary.length; i++) {
        addBookToDisplay(myLibrary[i]);
    }
}
