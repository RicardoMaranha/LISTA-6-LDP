function ex04(){
    let vetalunos = [] // declara vetor de nomes alunos
    let matriz = [] // declara matriz de notas
    let res = '' // declara variavel de resposta
    let soma_classe = 0
    
    //entrada de dados
    for(let i = 0;i < 5 ;i++ ){
        vetalunos[i] = String(prompt(`Digite o nome do Aluno:`))
        matriz[i] = []
        for(let j = 0;j < 5; j++ ){
            matriz[i][j] = Number(prompt(`Digite a ${j+1}º nota: de ${vetalunos[i]}:`))
            soma_classe += matriz[i][j]
        }
    }
    let matriz_media = []
    let soma_aluno = 0
    let media = 0 
    let media_sala = 0
    //processamento de dados
    for(let i = 0; i < 5; i++ ){
        res += `<hr>Aluno: ${vetalunos[i]}:<br>Notas:<br>`
        for(let j = 0; j < 5; j++ ){
            soma_aluno += matriz[i][j]
            res += ` ${matriz[i][j]},`
        }
        media = soma_aluno / matriz.length
        matriz_media.push(media)
        res += ` Media aluno: ${matriz_media[i]}<br>`
        soma_aluno = 0
        if(matriz_media[i] < 6){
            res += `Situação: REPROVADO`
        }
        else{
            res += `Situação: APROVADO`
        }
    }
    media_sala = soma_classe / 25

    document.getElementById('res').innerHTML = `${res}<hr>
    Media da sala: ${media_sala}`

    //
}