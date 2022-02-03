var agora = new Date()
var diaSemana = agora.getDay()
switch (diaSemana){
    case 0:
        diaSemana='Domingo'
        break
    case 1:
        diaSemana='Segunda'
        break
    case 2:
        diaSemana='Terça'
        break
    case 3:
        diaSemana='Quarta'
        break
    case 4:
        diaSemana='Quinta'
        break
    case 5:
        diaSemana='Sexta'
        break
    case 6:
        diaSemana='Sábado'
        break
    default:
        console.log('ERRO data inválida')
}
console.log(`Hoje é ${diaSemana}`)
if(diaSemana==6||diaSemana==0){
    console.log('Curta o fim de semana')
}else{
    console.log('Força que jajá a semana acaba')
}