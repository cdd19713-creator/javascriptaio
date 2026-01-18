const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let horizontal = 0;
let vertical = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        horizontal -= 10;
    }
    if (e.code === 'ArrowRight') {
        horizontal += 10;
    }
    if (e.code === 'ArrowUp') {
        vertical -= 10;
    }
    if (e.code === 'ArrowDown') {
        vertical += 10;
    }
    if (horizontal < 0) horizontal = 0;
    if (vertical < 0) vertical = 0;
    
    refresh();
}
function refresh() {
    ball.style.left = horizontal + 'px';
    ball.style.top = vertical + 'px';
}