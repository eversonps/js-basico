console.log(Date.now())

var agora = new Date()
console.log(agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear())
console.log(agora.toLocaleDateString("pt-br"))