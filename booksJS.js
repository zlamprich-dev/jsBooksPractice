const myLibrary = [];

function createBook() {
    let readStatus
    let authorNameInput = document.getElementById("authorName").value
    let titleInput = document.getElementById("bookTitle").value
    let pagesRead = document.getElementById("pagesRead").value
    let readStatusYes = document.getElementById("yesRead")

    if (readStatusYes.checked) {
        readStatus = "Yes"
    } else { readStatus = "No" }

    const book = {
        author: authorNameInput,
        title: titleInput,
        pagesRead: pagesRead,
        hasReadBook: readStatus
    }
    myLibrary.push(book)
    console.log(myLibrary)
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function libraryLoop() {
    let displayArea = document.getElementById("displayArea")


    for (let i = 0; i <= myLibrary.length - 1; i++) {
        if (myLibrary[i].title in myLibrary) {
            console.log(myLibrary[i].title + "Already Exists!")
        }

        createBookCard(i)
    }

    function createBookCard(i) {
        let bookCardClass = document.createElement("div")
        bookCardClass.setAttribute("class", `cards`)

        displayArea.append(bookCardClass)

        let bookCardContent = document.createElement("div")
        bookCardContent.setAttribute("id", `cardContent`)

        bookCardClass.append(bookCardContent)

        let bookTitle = document.createElement("p")
        let bookAuthor = document.createElement("p")
        let bookPagesRead = document.createElement("p")
        let bookReadStatus = document.createElement("p")

        bookCardContent.append(bookTitle, bookAuthor, bookPagesRead, bookReadStatus)

        bookAuthor.textContent = "Author: " + myLibrary[i].author
        bookTitle.textContent = myLibrary[i].title
        bookPagesRead.textContent = "Pages Read: " + myLibrary[i].pagesRead
        bookReadStatus.textContent = "Finished Book? " + myLibrary[i].hasReadBook

    }
}