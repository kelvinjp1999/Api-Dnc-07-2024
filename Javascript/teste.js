const bolsa=[
    'notebook',
    'celular',
    'Carteira',
    'Remedio',
    'moletom'
]

for(let i=0;i<bolsa.length;i++){
    if(bolsa[i] == 'Carteira'){
        console.log('Achamos a carteira')
        break
    }else{
        console.log('Essa é a ' + bolsa[i])
    }
}