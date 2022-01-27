class celular2 {
    constructor(){
        this.cor = "verde"
    }

    ligar(){
        return "liguei"
    }
}

let celular = new celular2()
console.log(celular.cor)
console.log(celular.ligar())