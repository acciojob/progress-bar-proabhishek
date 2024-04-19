let currentActive = 1;
const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    lines.forEach((line, idx) => {
        if(idx < currentActive - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });

    if(currentActive === 1) {
        prevButton.disabled = true;
    } else if(currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled =
