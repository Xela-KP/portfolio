document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const hoverGif = card.querySelector('.hover-gif');
        const originalSrc = hoverGif.src;
        let isLoaded = false;

        // Remove src initially to prevent loading
        hoverGif.removeAttribute('src');

        // Load GIF on first hover
        card.addEventListener('mouseenter', () => {
            if (!isLoaded) {
                hoverGif.src = originalSrc;
                isLoaded = true;
            }
        });

        // Pause GIF when not hovering
        card.addEventListener('mouseleave', () => {
            if (isLoaded) {
                const currentSrc = hoverGif.src;
                hoverGif.src = '';
                hoverGif.src = currentSrc;
            }
        });
    });
});