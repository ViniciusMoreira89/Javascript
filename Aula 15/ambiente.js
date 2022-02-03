//push para colocar valor na ultima casa seja qual for
//length pro comprimento total, ja coloca na hora de manipular ou exibir
//sort() para ordenar em crescente, pode ser isoladamente, na hora de manipular ou exibir
//mas onde quer que use, o vetor fica modificado permanentemente

let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(1)

console.log(`Nosso vetor é o ${num}, em ordem crescente é ${num.sort()} e possui ${num.length} casas`)

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`${num[pos]} `)
    if(pos != num.length-1){
        console.log(`- `)
    }
}
*/


/*
for feito para vetor, mais simplificado
*/

for (let cont in num){
    console.log(num[cont])
}

let pos = num.indexOf(4)

if(pos == -1){
    console.log(`O valor não foi encontrado.`)
}else{
    console.log(`A posição do número 5 é: ${num.indexOf(5)}`)
}