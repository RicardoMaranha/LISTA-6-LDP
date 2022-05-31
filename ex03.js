function ex03(){
    //declara matriz
    let mat_num = []
   
    let res = ''

    for(let i = 0; i < 6; i++){
        mat_num[i] = []
        for(let j = 0; j < 3; j++){
            mat_num[i][j] = Number(prompt(`Digite um numero para posição [${i+1}][${j+1}]:`))
        }
    }

    let maior = mat_num[0][0]
    let menor = mat_num[0][0]
    let pos_menor = `Posição [${1}][${1}]`
    let pos_maior = `Posição [${1}][${1}]`

    for(let i = 0; i < 6; i++){
        res += `<br>`
        for(let j = 0; j < 3; j++){
            res +=  `[ ${mat_num[i][j]} ]`
            if(mat_num[i][j] > maior){
                pos_maior = `Posição [${i+1}][${j+1}]`
                maior = mat_num[i][j]
            }
            if(mat_num[i][j] < menor){
                pos_menor = `Posição [${i+1}][${j+1}]`
                menor = mat_num[i][j]
            }
        }
    }

    document.getElementById('res').innerHTML = `${res}<br>
    O maior numero da matriz é ${maior} e está na posição ${pos_maior}<br>
    O menor numero da matriz é ${menor} e está na posição ${pos_menor}<br>`
}