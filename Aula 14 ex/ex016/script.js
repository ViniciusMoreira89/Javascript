function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let solucao = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        solucao.innerHTML='Impossível contar.'
        //window.alert('[ERRO] Faltam dados!')
    }else{
        solucao.innerHTML='Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido, considerando passo 1.')
            p=1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                solucao.innerHTML+=`${c} \u{1F449} `
            }
        }else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                solucao.innerHTML+=`${c} \u{1F449} `
            }
        }
        solucao.innerHTML+=`\u{1F3C1}`
    }
}