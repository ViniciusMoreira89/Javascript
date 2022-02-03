function tabuada(){
    let n = document.getElementById('numero')
    let res = document.getElementById('seltab')
    res.innerHTML=''
    if (n.value == 0){
        alert('Insira um número.')
        let item = document.createElement('option')
        item.text=`Digite um valor acima.`
        res.appendChild(item)
    }else{
        for(let c=1 ; c<=10 ; c++){
            let item = document.createElement('option')
            item.text=`${n.value} x ${c} = ${n.value*c}`
            res.appendChild(item)
        }
    }
}