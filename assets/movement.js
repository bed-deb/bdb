// movement.js

// Blokada przesuwania strony na boki (scroll X)
window.addEventListener('scroll', function() {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
});

// Alternatywnie, jeśli strona wciąż lata, wymuś overflow hidden na body:
document.body.style.overflowX = 'hidden';
