// Prospecção
// Função atual recebe 1000 se tiver mais de 100000 de transação começou 01/2020
const calculoProspeccao2020 = (
    transacao_mes_afiliado,
    receita_mes_novo_afiliado,
    receita_mes_antigo_afiliado
) => {
    if (transacao_mes_afiliado >= 100000)
        return (
            receita_mes_novo_afiliado * 0.2 + receita_mes_antigo_afiliado * 0.1 + 1000
        )
    return receita_mes_novo_afiliado * 0.2 + receita_mes_antigo_afiliado * 0.1
}

// Agrupamento dos valores necessários para o calculo
const transacoes_e_receitas = (baseComissoes, ano, mes, afiliado, tipoCliente) => {
    const filtrado = baseComissoes.filter(item =>
        item.ano === ano && item.mes === mes && item.afiliado === afiliado &&item.tipocliente === tipoCliente
    )
    const receitas = filtrado.map(item => item.receita)
    const transacoes = filtrado.map(item => item.valor)
    const somaTransacoes = transacoes.reduce(
        (anterior, proximo) => anterior + proximo
    )
    const somaReceitas = receitas.reduce(
        (anterior, proximo) => anterior + proximo
    )
    return { transacoes: somaTransacoes, receitas: somaReceitas }
}
  
// Função "main"
const prospeccao2020 = (baseComissoes, ano, mes, afiliado) => {
    const { receita_mes_novo_afiliado, transacao_mes_afiliado_novo } = transacoes_e_receitas(baseComissoes, ano, mes, afiliado, 'Novo')
    const { receita_mes_antigo_afiliado, transacao_mes_afiliado_antigo } = transacoes_e_receitas(baseComissoes, ano, mes, afiliado, 'Antigo')
    const transacao_mes_afiliado = transacao_mes_afiliado_novo + transacao_mes_afiliado_antigo
    return calculoProspeccao2020(transacao_mes_afiliado, receita_mes_novo_afiliado, receita_mes_antigo_afiliado)
}
  
module.exports = prospeccao2020