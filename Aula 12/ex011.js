var idade = 13
var cnh = true
if(idade>90){
    console.log('já não pode mais dirigir')
}else if (idade < 18) {
    if(cnh==true){
        console.log('menor de idade, para de mentir')
    }else{
        console.log('menor de idade, ainda nao pode dirigir')
    }
}else if (cnh == true){
    console.log('maior de idade, já pode dirigir')
}else{
    console.log('maior de idade, já pode tirar a cnh')
}