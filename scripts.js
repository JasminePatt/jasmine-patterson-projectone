// WELCOME MODAL
// When user visit home page, pop up modal greeting them to the website appears
// They click button and it appears/disappears


// Select the class and IDs and save them in variables
const modal = document.getElementById("modal");
const button = document.getElementById("open-btn");
const span = document.getElementsByClassName("close-btn");

// The user's click should trigger the opening of the modal. 
button.onclick = function() {
    modal.style.display = "block";
}

// Now that it's open, the modal needs to be closed, only triggered by the 'x' in the span
span["close-btn"].onclick = function() {
    modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     }
// }