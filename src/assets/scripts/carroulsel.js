let slide = document.querySelector('.slides');
let numSlide = document.querySelectorAll('.slide').length;
let slideControllers = document.querySelectorAll('.slide-balls');
let cont = 0;

slide.style.width = `${numSlide * 100}%`;   


slideControllers.forEach((element,index) => {
    element.addEventListener('click', ()=> {

        slideControllers.forEach(element => {
            element.classList.remove('actived');
        });

       element.classList.toggle('actived');
       cont = index;
       slide.style.marginLeft = `-${document.body.clientWidth * cont}px`;


    })
});

setInterval(() => {
    

    slideControllers.forEach(element => {
        element.classList.remove('actived');
    });
    
    cont++;

    if(cont == numSlide){

        slide.style.marginLeft = '0';
        cont = 0;

    }else{

        slide.style.marginLeft = `-${document.body.clientWidth * cont}px`;
    }

    slideControllers[cont].classList.toggle('actived');

}, 3000);