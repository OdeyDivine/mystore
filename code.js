const menu = document.getElementById('menu'); 
const navList = document.getElementById('visible'); 
const closed =document.getElementById('closed')

menu.addEventListener('click', () => {
     navList.classList.toggle('show');
});

closed.addEventListener("click", () => {
    navList.classList.remove("show");
});


