function tabuada() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    if (numero.value.length == 0) {
        alert('Por favor, preencha o campo com um número')
    }
}



/*{
        let num = Number(numero.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    } */