const buttonMenu = document.querySelector('.icon-menu')
const a = document.querySelectorAll('a.link');

a.forEach((link)=> {
  link.addEventListener('click', (e)=> {
    console.log('clicked')
    e.preventDefault();
  })
})

buttonMenu.addEventListener('click', ()=> {
  const sidebar = document.querySelector('.sidebar');
  const items = document.querySelectorAll('span, h2, .image');

  sidebar.classList.toggle('is-clicked');

  items.forEach((item)=> {
    item.classList.toggle('is-clicked');
  })
})


