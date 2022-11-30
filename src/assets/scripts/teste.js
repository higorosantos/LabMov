const filterBtn = document.querySelectorAll('.filter-button');


filterBtn.forEach((element) => {

    element.addEventListener('click',() => {
        console.log('krl')
        filterBtn.forEach((element)=> {
            element.classList.remove('actived');
        })
        element.classList.add('actived');

    })

})