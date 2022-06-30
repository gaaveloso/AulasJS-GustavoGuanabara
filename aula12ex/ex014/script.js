function carregar () {
   var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.webp'
        document.body.style.background = '#fecc97'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.webp'
        document.body.style.background = '#f2a088'
    } else {
        img.src = 'fotonoite.webp'
        document.body.style.background = '#975f82'
    }
}
