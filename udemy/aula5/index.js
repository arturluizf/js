const nome = "Artur";
const sobrenome = 'Luiz';
const idade = 17;
const pesoEmKg = 58 
const alturaEmM = 1.68;
let indiceMassaCorporal = Math.round(pesoEmKg / (alturaEmM **2)) ; 
let anoAtual = new Date().getFullYear();
let anoDeNascimento = anoAtual - idade;
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento} tem ${idade} anos, pesa ${pesoEmKg}kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);

