const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    } 
    
    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }

    const imc = calcularIMC(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);

});

function getNivelImc (imc) {
    const niver = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau I','Obesidade grau II', 'Obesidade grau III']

    if (imc >=39.9) return niver[5]
    if (imc >= 34.9) return niver[4]
    if (imc >= 29.9) return niver[3]
    if (imc >= 24.9) return niver[2]
    if (imc >= 18.5) return niver[1]
    if (imc < 18.5) return niver[0]
}

function calcularIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) { 
        p.classList.add('par-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}


// const pesoDoUsuario = document.querySelector('#peso')
    // const alturaDoUsuario = document.querySelector('#altura')