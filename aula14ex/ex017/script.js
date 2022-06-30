function calcular() {
    let numero1 = window.document.getElementById('numero')
    var resposta = window.document.getElementById('saida')
    if (numero1.value.length == 0) {
        resposta.innerHTML = 'Digite um número! '
    } else {
        resposta.innerHTML = ''
        let numero = Number(numero1.value)
        let contador = 1
        while (contador <= 10) {
            resposta.innerHTML += `${numero} x ${contador} = ${numero*contador}<br>`
            contador++
        }
    }
}
function limpar() {
    saida.innerHTML = '<p>Preencha os dados acima e aperte o botão.'
}
