let startx = 0;
let endx = 0;
let totalx = 0;

window.addEventListener('mousedown', (e) => {
    startx = e.offsetX;
});

window.addEventListener('mouseup', (e) => {
    endx = e.offsetX;

    totalx = startx - endx;
    if (totalx > 50) {
        moveElement()
    }

    console.log(startx);
    console.log(endx);
});

function moveElement() {
    const div = document.getElementById('div');
    div.style.left = `10px`;
    div.classList.toggle('fade');
}