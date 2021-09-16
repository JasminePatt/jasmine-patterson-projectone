// WELCOME MODAL
// When user visit home page, pop up modal greeting them to the website appears
// They click button and it appears/disappears

    //*Credit* W3 Schools for how to create a Modal & Gabbie Piraino on Medium https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e


// Select the class and IDs and save them in variables. Use '[0] to select the first element found
const modal = document.getElementById("modal");
const button = document.getElementById("open-btn");
const span = document.getElementsByClassName("close-btn")[0];

console.log(span);

// The user's click should trigger the opening of the modal. 
button.onclick = function() {
    modal.style.display = "block";
}

// Now that it's open, the modal needs to be closed, only triggered by the span
span.onclick = function() {
    modal.style.display = "none";
}

//  If they click outside the modal, closes
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}