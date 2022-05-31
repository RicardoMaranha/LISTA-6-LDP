function preencher(){
    let mat_num = [] //vetor de numeros
    let res = ''
    let soma = 0
    //ler valores
    for(let i = 0; i < 3; i++){
        mat_num[i] = []
        for(let j = 0; j < 5; j++){
            mat_num[i][j] = Number(prompt(`Digite um numero para posição [${i+1}][${j+1}]: `))
        }
    }
    //percorrer matriz e criar saída
    for(let i = 0; i  < 3; i++){
        res += `<br>`
        for(let j = 0; j < 5; j++){
            res += `[ ${mat_num[i][j]} ]`
            if(mat_num[i][j] >= 15 && mat_num[i][j] <= 20){
                soma += mat_num[i][j]
            }

        }
    }


    //saída
    document.getElementById('res').innerHTML = `Matriz: ${res}<br>
    Soma entre numeros 15 e 20 presentes na matriz é: ${soma}`
}