function validarFormulario() {

    const form = document.getElementById('form');
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    function receberForm (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome")
        const sobrenome = document.getElementById("sobrenome")
        const idade = document.getElementById("idade")
        const peso = document.getElementById("peso")
        const altura = document.getElementById("altura")

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${idade.value} anos, pesa ${peso.value} kg, e sua altura é de ${altura.value} m.</p>`
    }
    form.addEventListener('submit', receberForm)
}
