const myLibrary = [];


function newBook() {
    let formLocation = document.getElementById("formDiv")
    let form = document.createElement("form")
    formLocation.appendChild(form)

    let titleInput = document.createElement("input")
    titleInput.setAttribute("type", "text")
    titleInput.setAttribute("placeholder", "Book Title")

    let authorInput = document.createElement("input")
    authorInput.setAttribute("type", "text")
    authorInput.setAttribute("placeholder", "Author Name")

    let publishDateInput = document.createElement("input")
    publishDateInput.setAttribute("type", "text")
    publishDateInput.setAttribute("placeholder", "Book Title")
}


function addToLibrary() {
    let x = document.createElement("li")
    let input = document.getElementById("addBookField").value
    let displayArea = document.getElementById("displayArea")

    myLibrary.push(input)
    document.getElementById("addBookField").value = ""
    x.append(input)
    displayArea.append(x)
    console.log(input)
}