var n = document.getElementById('num')
var res = document.getElementById('list')
var conteudo = []

function adicionar(){
    if(n.value==0){
        alert('Digite um valor.')
    }else if(n.value<1||n.value>100){
        alert('Digite um número válido.')
    }else if(validar()==true){
        alert('Número já consta na lista.')
    }else{
        conteudo.push(n.value)
        var item = document.createElement('option')
        item.text=`Valor ${n.value} adicionado.`
        res.appendChild(item)
    }
}

function validar(){
    for(let c=0; c<=conteudo.length; c++){
        if(n.value==conteudo[c]){
            return true
        }
    }
    return false
}

function finalizar(){
    var numMaior=0
    var numMenor=100
    var soma=0
    var media
    for(let c=0; c<conteudo.length;c++){
        soma = Number(soma)+Number(conteudo[c])
        if(Number(conteudo[c])>numMaior){
            numMaior=conteudo[c]
        }
        if(Number(conteudo[c])<numMenor){
            numMenor=conteudo[c]
        }
    }

    media=soma/conteudo.length

    var fim = document.getElementById('final')
    fim.innerHTML+=`Ao todo temos ${conteudo.length} números cadastrados.<br>`
    fim.innerHTML+=`O maior número informado foi ${numMaior}.<br>`
    fim.innerHTML+=`O menor número informado foi ${numMenor}.<br>`
    fim.innerHTML+=`Somando todos os valores, temos ${soma}.<br>`
    fim.innerHTML+=`A média dos valores digitados é ${media.toFixed(2)}.`
}