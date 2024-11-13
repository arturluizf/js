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
}           /*Caso eu coloca-se as imagens seria assim


            criaria a imagem por aqui msm

            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

            ai viria as condições 

        if (idade >=0 && idade < 12) {
        seria a imagem da criança
        } else if (idade < 18) { 
            seria a foto de um jovem
        } else if ( < 50) {
            seria a foto de um adulto
        } else { 
            seria a foto de um idoso 
        }
        
        para colocar as imagens seria assim: img.setAttribute('src', 'a imagem')

        e para mostrar seria res.appendChild(img)

            isto serve tbm para a mulher */
        
        

        

        