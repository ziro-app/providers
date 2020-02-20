const pagamentos = require('./pagamentos')

const listarPagamentos = (basePessoas, baseComissoes, baseAssessor,baseReajuste) => {
    const listaPessoa = basePessoas.map(pessoa => {
        const arrayPagamento = pagamentos(new Date(2020,1).getMonth(), new Date().getMonth()+1, pessoa.parcela1, pessoa.modeloParcela2, baseComissoes, baseAssessor, pessoa.apelido, pessoa.dataInicio, pessoa.dataFim,baseReajuste)
        return arrayPagamento
    })
    return listaPessoa
}

module.exports = listarPagamentos