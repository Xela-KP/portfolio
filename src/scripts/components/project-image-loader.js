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

        // Optional: Pause GIF when not hovering (if it supports it)
        card.addEventListener('mouseleave', () => {
            // This works for some GIFs - you can remove if not needed
            if (isLoaded) {
                const currentSrc = hoverGif.src;
                hoverGif.src = '';
                hoverGif.src = currentSrc;
            }
        });
    });
});