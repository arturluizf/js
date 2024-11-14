function contar() {  
let res = document.getElementById('res')
let i = document.getElementById('inicio')
let f = document.getElementById('fim') 
let p = document.getElementById('passo')

if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    //alert('[Erro] Coloque um número válido')
    res.innerHTML = 'Impossível contar!'
    res.style.marginTop = '10px'
    } else {
        res.innerHTML = 'Contando:'
        res.style.marginTop = '10px'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let pas = Number(p.value)
        if (pas <= 0 || ini <= 0 || fim <= 0) {
            alert('Coloque um número diferente de 0')
            pas = 1
            ini = 1
            fim = 1
        }
            if (ini < fim) /*Crescente*/ {
                for (let c = ini; c <= fim; c += pas) {
                    res.innerHTML += `${c} \u{27A1}`
                }
            } else  /*Decrescente*/ { 
        for (let c = ini; c >= fim; c -= pas) {
        res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}

