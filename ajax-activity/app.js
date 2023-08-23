let button = document.getElementById('btn btn-secondary btn-sm');

button.addEventListener("click", submitText);

function submitText() {
let xhr = new XMLHttpRequest();

xhr.open("POST", "sample.txt");

}