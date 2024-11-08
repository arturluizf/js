function carregar() {
    let texto = document.getElementById('texto')
    let img = document.getElementById('foto')
    let data = new Date ()
    let hora = data.getHours()
    
    texto.innerHTML = `<p>Agora são ${hora} horas</p>` 
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.png"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'rgb(202, 106, 2)'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(45, 32, 49)'
    }
    
}