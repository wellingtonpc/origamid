function isTruthy(value) {
    return !!value;
}

function perimetroQuadrado(lado) {
    return lado * 4;
}

function completeName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function dataType(value) {
    return typeof value;
}

var index = 0;
document.addEventListener('scroll', function() {
    index++;
    console.log('Meu nome é Nome Sobrenome e estou aprendendo JavaScript. ' + index + 'ª vez que o evento scroll foi disparado.');
});

