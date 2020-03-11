// Prospecção
// Função atual recebe 1000 se tiver mais de 100000 de transação começou 01/2020
const calculoVendas2020 = (
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
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.ano === ano && item.mes === mes && item.afiliado.toLowerCase() === afiliado.toLowerCase() && item.tipoCliente === tipoCliente
        )
        const receitas = filtrado.map(item => item.receita)
        const transacoes = filtrado.map(item => item.valor) 
        if(receitas[0] != undefined && transacoes[0] != undefined){
            const somaTransacoes = transacoes.reduce(
                (anterior, proximo) => anterior + proximo
            )
            const somaReceitas = receitas.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return { transacao_mes_afiliado: somaTransacoes, receita_mes_afiliado: somaReceitas }
        }else{
            return { transacao_mes_afiliado: [], receita_mes_afiliado: [] }
        }
    }else{
        return { transacao_mes_afiliado: [], receita_mes_afiliado: [] }
    }
}
  
// Função "main"
const vendas2020 = (baseComissoes, ano, mes, afiliado) => {
    const receitaTransacoesNovo = transacoes_e_receitas(baseComissoes, ano, mes, afiliado, 'Novo')
    const receitaTransacoesAntigo = transacoes_e_receitas(baseComissoes, ano, mes, afiliado, 'Antigo')
    const transacao_mes_afiliado_novo = receitaTransacoesNovo.transacao_mes_afiliado
    const transacao_mes_afiliado_antigo = receitaTransacoesAntigo.transacao_mes_afiliado
    const transacao_mes_afiliado = transacao_mes_afiliado_novo + transacao_mes_afiliado_antigo
    const receita_mes_novo_afiliado = receitaTransacoesNovo.receita_mes_afiliado
    const receita_mes_antigo_afiliado = receitaTransacoesAntigo.receita_mes_afiliado
    return calculoVendas2020(transacao_mes_afiliado, receita_mes_novo_afiliado, receita_mes_antigo_afiliado)
}
  
module.exports = vendas2020