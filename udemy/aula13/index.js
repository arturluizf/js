/*
Primitivos (imutáveis) - string, number, boolean, null, undefined, symbol, bigint - valor copiados

Referência (mutável) - array, object, function - endereço da memória - passados por valor, mas podem ser alterados por referência.
*/

let a = 'A'
let b = a // valor copiado
console.log(a, b)
a = 'oi'
console.log(a, b)

let c = [1, 2, 3]
let d = [...c] // valor copiado
let e = d // valor passado por referência
console.log(c, d, e)

c.push(4);
console.log(c, d)

d.pop()
console.log(c, d)

console.log(e)

// funciona também com objetos