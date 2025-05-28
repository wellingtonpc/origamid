// return all images
const images = document.querySelectorAll('img');
images.forEach(function(item, index){
    console.log(item);
});

// return all images that begins with image

const imagesBeginsWith = document.querySelectorAll('img[src^="img/image"]');
console.log(imagesBeginsWith);


// get all intern links that begins with #
const internalLinks = document.querySelectorAll('[href^="#"]')

// get the first h2 inside .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2')


// select the last <p>
const lastP = document.querySelector('p:last-child')