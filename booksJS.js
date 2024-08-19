const myLibrary = [];



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