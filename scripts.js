// Selecciona el libro
const book = document.querySelector('.book');

// Agrega o quita la clase "open" al hacer clic
book.addEventListener('click', () => {
  book.classList.toggle('open');
});
