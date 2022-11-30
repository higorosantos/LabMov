function changeImage(element, idMainImage){
    
    let mainImage = document.querySelector(`#${idMainImage}`);
    let bgElement = window.getComputedStyle(element);
    console.log(bgElement.backgroundImage);
    mainImage.style = `background-image: ${bgElement.backgroundImage}`;

 }