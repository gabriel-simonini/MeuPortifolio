// Menu mobile: abre/fecha o menu de navegação
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

menu.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link (útil no mobile)
document.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});
