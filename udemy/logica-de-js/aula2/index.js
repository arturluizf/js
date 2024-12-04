let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora >= 0 && hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde")
} else  {
    console.log("Boa noite")
}

/*
* If pode usado sozinho
* eu posso ter vários else if na condição
* e posso usar um else no final

*/

const tenhoGrana = true

if (tenhoGrana) {
    console.log("Vou comprar um carro!")
} else {
    console.log("Vou ficar de pé")
}