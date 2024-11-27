//Em JavaScript, um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável.
// Isso é um array ,JS não tem tipos de dados definidos, então podemos colocar qualquer coisa aqui, porém não é recomendado

// array é um objeto


let alunos = ['Artur','Maria', 'João']
// alunos = 2224

console.log(typeof alunos) // objeto
console.log(alunos instanceof Array) // true

// alunos.push('Eduardo')
// alunos.push('Bento')
// alunos.push('Juana')

// console.log(alunos.slice(0, -2))

// delete alunos[0] // deleta o elemento mas o índice continua existindo

// alunos.shift() // remove o primeiro elemento do array

// alunos.pop() // remove o último elemento do array, posso colocar em uma variável 

// alunos.unshift('Pedro') // adiciona no início

// alunos[1] = 'Samuel' // para alterar um índice

// console.log(alunos[1])
// console.log(alunos[0])

// alunos[3] = 'carlos' //adicionar um novo elemento
// console.log(alunos)

// console.log(alunos.length) // saber a quantidade de elementos no array
// console.log(alunos.indexOf('João')) // saber a posição de um elemento no array
// alunos.push('Otávio') // forma mais comum de adicionar elementos
// console.log(alunos)