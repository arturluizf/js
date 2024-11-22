let num1 = 10
let num2 = 2.5

console.log(num1 + num2)
console.log(num1.toString() + num2) // converter um number para string antes de concatenar
// num1.toString() para transformar um número em string
console.log(num1.toString(2)) // para ver a versão binária do número
console.log(num1.toFixed(3)) // arrendondar um número
console.log(Number.isInteger(num1)) // para saber se o numero é inteiro
let num3 = num1 * '6'
console.log(Number.isNaN(num3)) // para saber se o resultado é NaN (Not a Number)

let num4 = 0.7
let num5 = 0.1

// num4 += num5 //0.8 0.79999999999
// num4 += num5 //0.9 0.89999999999
// num4 += num5 // 1 0.99999999999
// num4 = Number(num4.toFixed(2)) // fazer que um número inteiro  ou não teja erro de 0.799999999 caso some 0.1 e 0.7

// o de cima é com funções

// num4 = ((num4 * 100) + (num5 * 100)) / 100 outro jeito de fazer o mesmo
console.log(num4)
console.log(Number.isInteger(num4))
console.log()