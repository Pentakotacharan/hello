const noBtn = document.getElementById('noBtn');

const moveButton = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Margin so it doesn't get stuck on the edge
    const margin = 20;

    // Calculate random position
    const newX = Math.random() * (windowWidth - btnWidth - (margin * 2)) + margin;
    const newY = Math.random() * (windowHeight - btnHeight - (margin * 2)) + margin;

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
};

// Handle Mouse (Laptop)
noBtn.addEventListener('mouseover', moveButton);

// Handle Touch (Mobile)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Handle Fast Clicks
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});