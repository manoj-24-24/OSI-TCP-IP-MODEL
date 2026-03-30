let step = 0;

const messages = [

"Hello",

"[Encrypted] Hello",

"[Session][Encrypted] Hello",

"[TCP Header][Session][Encrypted] Hello",

"[IP Header][TCP Header][Session][Encrypted] Hello",

"[Frame Header][IP][TCP][Session][Encrypted] Hello",

"01001000 01100101 01101100 01101100 01101111"

];

function clearActive() {

document.querySelectorAll(".layer")
.forEach(layer => {

layer.classList.remove("active");

});

}

function highlight(stepIndex) {

document.querySelectorAll(".layer")
.forEach(layer => {

if (layer.dataset.step == stepIndex) {

layer.classList.add("active");

}

});

}

function updateMessage(stepIndex) {

const bubble =
document.getElementById("messageBubble");

bubble.innerText =
messages[stepIndex];

bubble.style.top =
(10 + stepIndex * 40) + "px";

}

function startFlow() {

step = 0;

const interval =
setInterval(() => {

clearActive();

highlight(step);

updateMessage(step);

step++;

if (step > 6) {

clearInterval(interval);

}

}, 1200);

}