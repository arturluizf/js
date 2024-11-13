function contar() {  
let res = document.getElementById('res')
let i = document.getElementById('inicio')
let f = document.getElementById('fim') 
let p = document.getElementById('passo')

if (i.value.length == 0 || f.value == 0 || p.value == 0) {
    alert('[Erro]')
}else {
    res.innerHTML = 'Contando:'
    res.style.marginTop = '10px'
    let ini = Number(i.value)
    let fim = Number(f.value)
    let pas = Number(p.value)

    for (let c = i; c <= fim; c += pas) {
        res.innerHTML += `${c} `
}
}
}
