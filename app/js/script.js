const btnHamburguer = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menu')

btnHamburguer.addEventListener('click', () => {
  menu.classList.toggle('showMenu')
})