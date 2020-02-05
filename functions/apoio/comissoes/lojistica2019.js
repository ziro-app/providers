const transNumb = (numero) => {
    return Number(numero.replace(',','.'))
}
//Lojistica - começou a ter comissão 09/2019
const calculoLojistica2019 = receita_mes_ziro => {
    return receita_mes_ziro * 0.005
}

// Montando objeto de Retorno
let result = []
const lojistica2019 = (base) => {
    for(let dado of base.values){
        if(dado[1] == 2019 && dado[0] >= 9 || dado [1] >= 2020){
            let comissao = calculoLojistica2019(transNumb(dado[2]))
            result.push({'ano': dado[1], 'mes': dado[0],'comissao':comissao})
        }
    }
    return result
}
  
module.exports = lojistica2019