let menu = document.querySelector('.menu');
let toggle = document.querySelector('.menu-toggle');


toggle.addEventListener('click', (data, index)=> {
    menu.classList.toggle("active");
})

