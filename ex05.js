function ex05(){
    let meses = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']
    let matriz = []
    let res = ''
    let fat_mes =  0
    let fat_anual = 0
    let matriz_fat_mes = []
    //entrada de vendas
    for(let i = 0; i < 12; i++){
        matriz[i] = []
        for(let j = 0; j < 4; j++){
            matriz[i][j] = Number(prompt(`Digite o valor de vendas da semana ${j+1} do mes ${meses[i]}: `))
        }
    }

    //processamento
    for(let i = 0; i < 12; i++){
        res += `<hr>${meses[i]}<br>`
        for(let j = 0; j < 4; j++){
            fat_mes += matriz[i][j]
            res += `    Faturamento semana ${j+1}: R$ ${matriz[i][j]}<br>`
        }
        matriz_fat_mes.push(fat_mes)
        fat_mes = 0
        res += `<hr>Faturamento mensal: R$${matriz_fat_mes[i].toFixed(2)}`
        fat_anual += matriz_fat_mes[i]
    }
    res+= `<br><hr>Faturamento Anual R$${fat_anual.toFixed(2)}<br>`

    document.getElementById('res').innerHTML = `${res}<hr>`
}