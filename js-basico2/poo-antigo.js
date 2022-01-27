let celular = function(){
    this.cor = "vermelha"
    this.ligar = function(){
        return "liguei"
    }
}

let objeto = new celular()
console.log(objeto.ligar())
console.log(objeto.cor)