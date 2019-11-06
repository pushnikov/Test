window.onload=function(){
const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');


menuButton.addEventListener('click', () => {
  nav.classList.contains('active') 
    ? nav.classList.remove('active')
    : nav.classList.add('active')
        });
}