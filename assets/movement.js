// Zapobiega przewijaniu w poziomie
document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';

// Gdyby mimo wszystko coś wywołało scroll w bok — cofamy
window.addEventListener('scroll', () => {
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
});
