const myLibrary = [];
let clickState = false



function createBook() {
    let x = document.getElementById("overlay")
    if (!clickState) {

        x.style.display = "boxed"
    }
    x.style.display = "none"

}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function addToLibrary() {
    let input = document.getElementById("addBookField").value

    myLibrary.push(input)
    document.getElementById("addBookField").value = ""
    console.log(input)
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