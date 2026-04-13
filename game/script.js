const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

const target = {
    x: Math.random() * (canvas.width - 50),
    y: Math.random() * (canvas.height - 50),
    radius: 25,
    color: 'red'
};

function drawTarget() {
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
    ctx.fillStyle = target.color;
    ctx.fill();
    ctx.closePath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function spawnTarget() {
    target.x = Math.random() * (canvas.width - 50) + 25;
    target.y = Math.random() * (canvas.height - 50) + 25;
}

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - target.x;
    const dy = mouseY - target.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < target.radius) {
        score++;
        document.getElementById('score').innerText = score;
        spawnTarget();
    }
});

function gameLoop() {
    clearCanvas();
    drawTarget();
    requestAnimationFrame(gameLoop);
}

gameLoop();