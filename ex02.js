function ex02(){
    //declara matriz
    let num_matriz = []
    let quant = 0
    let soma = 0
    let media = 0
    let quant_par = 0
    let res = ''
    //preencher matriz
    for(let i = 0;i < 2; i++){
        num_matriz[i] = []
        for(let j = 0;j < 4; j++){
            num_matriz[i][j] = Number(prompt(`Digite um numero para [${i+1}][${j+1}]: `))                
        }
    }
    //percorrer matriz
    for(let i = 0; i < 2; i++){
        res += '<br>'
        for(let j = 0; j < 4; j++){
            res += `[ ${num_matriz[i][j]} ]`
            if(num_matriz[i][j] >= 12 && num_matriz[i][j] <= 20){
                quant ++
            }
            if(num_matriz[i][j] % 2 == 0){
                quant_par ++
                soma += num_matriz[i][j]
            }
        }
    }

    media = soma / quant_par

    //saida
    document.getElementById('res').innerHTML = `${res}<br>
    Quantidade dos numeros entre 12 e 20: ${quant}<br>
    Media entre os numeros pares da matriz: ${media}`

    
}