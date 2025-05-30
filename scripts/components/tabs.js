document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('[data-tab-container]');
    if (!tabContainer) return;

    const buttons = tabContainer.querySelectorAll('[data-tab]');
    const panels = tabContainer.querySelectorAll('[data-panel]');

    function switchTab(targetTab) {
        // Remove active state from all buttons and panels
        buttons.forEach(btn => btn.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        // Activate the target button and panel
        const activeButton = tabContainer.querySelector(`[data-tab="${targetTab}"]`);
        const activePanel = tabContainer.querySelector(`[data-panel="${targetTab}"]`);

        if (activeButton && activePanel) {
            activeButton.classList.add('active');
            activePanel.classList.add('active');
        }
    }

    // Add click listeners
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            switchTab(button.dataset.tab);
        });
    });
});