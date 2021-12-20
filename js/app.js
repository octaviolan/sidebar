const buttonMenu = document.querySelector('.icon-menu')

buttonMenu.addEventListener('click', ()=> {
  const sidebar = document.querySelector('.sidebar');
  const items = document.querySelectorAll('span, h2, .image');

  sidebar.classList.toggle('is-clicked');

  items.forEach((item)=> {
    item.classList.toggle('is-clicked');
  })
})


