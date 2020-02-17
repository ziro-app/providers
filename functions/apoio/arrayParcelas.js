const assessor2020 = require('./comissoes/assessores2020')
const assessor2019 = require('./comissoes/assessores2019')
const logistica2019 = require('./comissoes/logistica2019')
const cobranca2019 = require('./comissoes/cobranca2019')
const vendas2020 = require('./comissoes/vendas2020')
const stringDate = require('@ziro/string-to-date')

// Condicional de chamada da função de parcela2
const listarParcela2 = (modeloParcela2, baseComissoes, baseAssessor, ano,mes,apelido) => {
    if(modeloParcela2 === '-') return 0
    if(modeloParcela2 === 'assessor2020') return assessor2020(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'assessor2019') return assessor2019(baseAssessor, ano, mes, apelido)
    if(modeloParcela2 === 'cobranca2019') return cobranca2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'lojistica2019') return logistica2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'vendas2020') return vendas2020(baseComissoes, ano, mes, apelido)
}

// Calculo do ultimo dia do mês
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
}

// Achar alteração em reajust

const searchReajuste = (apelido, dataProcurada, baseReajuste, parametro) => {
    const filtrar = baseReajuste.filter(reajusteLine => {
        return (
            dataProcurada >= stringDate(reajusteLine.data) && reajusteLine.apelido === apelido
        )
    })
    if (filtrar[0] !== undefined) {
        const ultimo = filtrar.length - 1
        if (filtrar[ultimo].parcela1 !== '-') return filtrar[ultimo].parcela1
        if (filtrar[ultimo].modeloParcela2 !== '-') return filtrar[ultimo].modeloParcela2
        if (filtrar[ultimo].escopo !== '-') return filtrar[ultimo].escopo
    } else {
        return parametro
    }
}
  

// Listagem dos pagamentos efetuados por funcionário
const pagamentos = (mesInicio, mesFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido, dataEntrou, dataSaiu, baseReajuste) => {
    let listPagamentos = []
    for(let i = mesInicio; i <= mesFim; i++){
        if((stringDate(dataEntrou)).getFullYear() === 2020 && (stringDate(dataEntrou)).getMonth() === i){
            const coeficiente = (calculoUltimoDia(2020,i) - stringDate(dataEntrou)/calculoUltimoDia(2020,i))
            const parcela2 = listarParcela2(modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: parcela1*coeficiente,
                // colocar proporcional na parcela 2 também, somente quando for lojistica ou cobrança
                parcela2: parcela2*coeficiente
            })
        }
        if(dataSaiu === '-' && stringDate(dataEntrou) <= new Date(2020,i) || stringDate(dataSaiu) <= new Date(2020, i) && stringDate(dataEntrou) >= new Date(2020,i)){
            const parcela2 = listarParcela2(modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: searchReajuste(apelido,new Date(2020,i), baseReajuste, parcela1),
                parcela2: searchReajuste(apelido,new Date(2020,i), baseReajuste, parcela2)
            })
        }else{
            listPagamentos.push([])
        }
    }
    return listPagamentos
}

// Função final
const listarPessoas = (basePessoas, baseComissoes, baseAssessor,baseReajuste) => {
    const listaPessoa = basePessoas.map(pessoa => {
        const arrayPagamento = pagamentos(new Date(2020,1).getMonth(), new Date().getMonth()+1, pessoa.parcela1, pessoa.modeloParcela2, baseComissoes, baseAssessor, pessoa.apelido, pessoa.dataInicio, pessoa.dataFim,baseReajuste)
        return arrayPagamento
    })
    return listaPessoa
}


module.exports = listarPessoas