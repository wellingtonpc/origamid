const h1Selecionado = document.querySelector('h1');

h1Selecionado.addEventListener('click', () => {
    console.log('H1 Selecionado:', h1Selecionado.innerText); 
  }
)

h1Selecionado.addEventListener('mouseover', () => {
    h1Selecionado.style.color = 'blue'; 
  }
)

h1Selecionado.addEventListener('mouseout', () => {
  h1Selecionado.style.color = 'black'; 
}
)

window.location.href
console.log(window.location.href);

firtActive = document.querySelector('.active');

browserLanguage = navigator.language; 
windowWidth = window.innerWidth;