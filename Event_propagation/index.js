const outerDiv = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');
const close = document.getElementById('close');
const popover = document.getElementById('popover');
const popoverText = document.getElementById('popoverText');

function showPopover(text) {
    popoverText.innerText = text;
    popover.style.display = 'block';
}

function hidePopover() {
    popover.style.display = 'none';
}

button.addEventListener('click', (event) => {
    // event.stopPropagation(); // Prevent outer/inner propagation
    console.log("Button clicked");
    showPopover("Popover opened by Button");
});

inner.addEventListener('click', (event) => {
    // event.stopPropagation();
    console.log("Inner Div clicked");
    showPopover("Popover opened by Inner Div");
});

outerDiv.addEventListener('click', () => {
    console.log("Outer Div clicked");
    showPopover("Popover opened by Outer Div");
});

close.addEventListener('click', hidePopover);
