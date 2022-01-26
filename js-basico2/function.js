function somar(x1, x2, operacao){
    return eval(`${x1} ${operacao} ${x2}`)
}

// ArrowFunction
var somarArrow = (x1, x2, operacao) => {
    return eval(`${x1} ${operacao} ${x2}`)
}

let resultado = somar(34, 9, "-")

// função anonima 
var resultado2 = (function(x1, x2, operacao){
    return eval(`${x1} ${operacao} ${x2}`)
})(3, 3, "*");

let resutado3 = somarArrow(3, 9, "*")

console.log(resultado)
console.log(resultado2)
console.log(resutado3)