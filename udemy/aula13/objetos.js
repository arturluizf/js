// {} objetos
// [] arrays

const persona = {
    nome : 'Artur',
    sobrenome : 'Luiz',
    idade : 17,
}
// console.log(persona.nome); // Artur
// console.log(persona.sobrenome); // Luiz

// com function

function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}
const pessoa = criarPessoa('Artur', 'Luiz', 17);
console.log(pessoa.nome);

// function dentro de objeto

const pessoa3 = {
    nome : 'Artur',
    sobrenome : 'Luiz',
    idade : 17,

    falar() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    }
} 

pessoa3.falar()

