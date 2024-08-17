const myLibrary = [];


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