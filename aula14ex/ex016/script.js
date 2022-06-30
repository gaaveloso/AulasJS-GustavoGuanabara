function contar() {
    let r=window.document.getElementById('saida')
    let v1=window.document.getElementById('i')
    let v2=window.document.getElementById('f')
    let p=window.document.getElementById('p')

    if (v1.value.length == 0 || v2.value.length == 0 || p.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        r.innerHTML = 'Impossível Contar'
    } else {
        r.innerHTML = 'Contando: <br>'
        let n1 = Number(v1.value)
        let n2 = Number(v2.value)
        let p1 = Number(p.value)
        if (p1 <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p1 = 1
        }
        if (n1 < n2) {
            for (let c = n1; c <= n2; c += p1) {
                r.innerHTML += `${c} \u{1F449}`
                } 
            } else {
                for (let c = n1; c >= n2; c -= p1) {
                r.innerHTML += `${c} \u{1F449}`
                }
            }
        }
        r.innerHTML += `\u{1F3C1}`
}