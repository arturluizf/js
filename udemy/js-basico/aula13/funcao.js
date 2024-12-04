function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const s = saudacao('Artur')
console.log(s)

function soma(x = 1, y = 2) {
    const resultado = x + y
    return resultado
}
console.log(soma())

// função anônima com variável

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(49))
console.log(raiz(9))

// com arrow function

const raizQuadrada = r => r ** 2

console.log(raizQuadrada(3))
console.log(raizQuadrada(9))
