const menu = document.getElementById('menu'); 
const navList = document.getElementById('visible'); 
const closed =document.getElementById('closed')

menu.addEventListener('click', () => {
     navList.classList.toggle('show');
});

closed.addEventListener("click", () => {
    navList.classList.remove("show");
});


document.querySelectorAll('#chop').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('food').scrollIntoView({ behavior: 'smooth' });
    });
  });