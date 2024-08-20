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
        readStatus: readStatus
    }

    
    console.log(myLibrary)
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function addToLibrary() {
    let input = createBook()


}

function libraryLoop() {
    let table = document.getElementById("bookInfo")

    for (let i = 0; i <= myLibrary.length - 1; i++) {
        let books = myLibrary[i]
        let tableRows = document.createElement("tr")
        table.append(tableRows)
        tableRows.append(books)

        console.log(myLibrary[i])
    }
}