// movement.js

// Całkowite zablokowanie przewijania w poziomie
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
        if (window.scrollX !== 0) {
            window.scrollTo(0, window.scrollY);
        }
    });
});
