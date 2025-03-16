const menu = document.getElementById('menu'); 
const navList = document.getElementById('visible'); 
const closed =document.getElementById('closed')
const foodLink = document.getElementById('chop')
const foodSection = document.getElementById('eatable');

menu.addEventListener('click', () => {
     navList.classList.toggle('show');
});

closed.addEventListener("click", () => {
    navList.classList.remove("show");
});



foodLink.addEventListener("click", (e) => {
    e.preventDefault(); 
    foodSection.scrollIntoView({ behavior: 'smooth' }); 
    navList.classList.remove("show"); 
});