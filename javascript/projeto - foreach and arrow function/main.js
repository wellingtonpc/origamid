// const images = document.querySelectorAll('img');
// images.forEach(function(item){
//     console.log(item);
// }
// );

// images.forEach((item) => {
//     console.log(item);
// });


// show in console each paragrapth
const paragrapths = document.querySelectorAll('p');

paragrapths.forEach((item) => {
    console.log(item);
});

// show the text inside paragrapth
paragrapths.forEach((item) => {
    console.log(item.textContent)
});

// correct this code
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//     console.log(item, index);
// });

// let i = 0:
// imgs.forEach( => {
//     console.log(i++);
// });

// imgs.forEach(() => i++);

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});


let i = 0;
imgs.forEach(() => {
    console.log(i++);
});


imgs.forEach(() => console.log(i++));