let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


function Isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(Isnumero(num.value) && !inLista(num.value, valores)){ // 2 novas funcao  precisa ser criadas!
        valores.push(Number(num.value)) // adicionar o numero digitado no vetor
        let item = document.createElement('option') // criantor 1 option para a lista
        item.text = `valor ${num.value} adicionador.` // escrever dentro do option
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}



function finalizar(){
    if(valores.length == 0){
        alert('Adicionar valores antes de começar!')
    }else{
        let tot = valores.length // variavel do total
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor infromado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, Temos ${soma}</p>.`
    }   res.innerHTML += `<p>A média dos valroes digitado é ${media}</p>.`
}