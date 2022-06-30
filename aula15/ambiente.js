let num = [5, 8, 2, 9, 3]
num.push(1) /* Usa pra colocar um valor no vetor */ 
num.sort() /* Usa pra colocar o vetor em ordem crescente */
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9) // Alterar valor da busca
    console.log('---BUSCANDO VALOR---')
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}


/*
num.indexOf(5)
num.indexOf(1) Serve pra procurar o numero dentro de algum vetor, caso não tenha, retorna -1
*/