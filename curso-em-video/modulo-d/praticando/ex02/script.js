function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoDoNascimento = document.getElementById('nasc')
    
    let res = document.getElementById('resultado')
    if (anoDoNascimento.value.length== 0 ||Number(anoDoNascimento.value) > ano) {
        window.alert('[ERRO]Verifique seu dados, e tente novamente!')
    }else  {
        let sex = document.getElementsByName('sexo')
        let idade = ano - Number(anoDoNascimento.value)
        let genero = ''
        if (sex[0].checked) {
            genero = 'Masculino'
        } else if (sex[1].checked) {
            genero = 'Feminino'
    }
    res.innerHTML = `<p>Você tem ${idade} anos e o seu sexo é ${genero}</p>`
    res.style.textAlign = 'center'
            }
}