let num = [5, 7, 4, 9, 3, 2]
num.sort() //coloca em ordem crescente
num.push(10) //adiciona um novo elemento ao final da lista
//num[7] = 10
console.log(num)
console.log(`Os números são ${num}`)
console.log(`O maior número da lista é: ${Math.max(...num)}`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
/*for(let pos = 0 ; pos <num.length; pos++){
    console.log(num[pos])
    //console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (let pos in num){
    console.log(num[pos])
}

let i = num.indexOf(9)
if (i == -1 ){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${num[i]} foi encontrado na posição ${i}`)
}