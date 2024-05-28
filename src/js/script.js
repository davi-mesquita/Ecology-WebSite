window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Mostra o header após 50px de rolagem
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
  });