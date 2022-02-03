function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        img.src = 'imagens/manha.jpg'
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.padding = '20px'
        document.body.style.background = '#e2cd9f'
    }else if (hora >=12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.padding = '20px'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'imagens/noite.jpg'
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.padding = '20px'
        document.body.style.background = '#515154'
    }
}