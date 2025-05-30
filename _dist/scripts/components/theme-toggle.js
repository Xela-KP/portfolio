(function () {
    const btn = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");

    // Apply stored or system preference
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        root.setAttribute("data-theme", "dark");
    }

    // Toggle on click
    btn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", current);
        localStorage.setItem("theme", current);
    });
})();
