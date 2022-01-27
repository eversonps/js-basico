let carros = ["banana", "morango", 17, 3.18, true, new Date()]

console.log(carros)
console.log(carros[0])
console.log(carros[5])
console.log("Tamanho: "+ carros.length)


carros.forEach(function(value, index){
    console.log("valor: " + value + "\nindex: ", index)
})