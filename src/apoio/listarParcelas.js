const pagamentos = require('./pagamentos')

const listarPagamentos = (basePessoas, baseComissoes, baseAssessor,baseReajuste, baseTransacoes, baseVendedores, baseFabricantes) => {
    const listaPessoa = basePessoas.map(pessoa => {
        const arrayPagamento = pagamentos(1, new Date().getMonth()+1, pessoa.parcela1, pessoa.modeloParcela2, baseComissoes, baseAssessor, pessoa.apelido, pessoa.dataInicio, pessoa.dataFim,baseReajuste,baseTransacoes, baseVendedores, baseFabricantes, pessoa.escopo)
        return arrayPagamento
    })
    return listaPessoa
}

module.exports = listarPagamentos