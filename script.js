// const menuIcon = document.getElementById('menuIcon');
// const navlinks = document.getElementById('navlinks');

// menuIcon.addEventListener('click',() => {
//     navlinks.classList.toggle('active');
// });
const momo = document.getElementById('momo');
const navlinks = document.getElementById('navlinks');


momo.addEventListener('click',() => {
    navlinks.classList.toggle('active');
});






function togglemenu(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show-another');
};