const num1 = Number(prompt('Digite um número: '))

document.getElementById('titulo').innerHTML = `Seu número é ${num1}`;
document.body.innerHTML += `Raiz quadrada: ${num1 ** 0.5}<br>`
document.body.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)}<br>`
document.body.innerHTML += `È NaN: ${Number.isNaN(num1)}<br>`
document.body.innerHTML += `Arrendondador para baixo: ${Math.floor(num1)}<br>`
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num1)}<br>`
document.body.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}<br>`