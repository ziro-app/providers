const coeficiente = require('./proporcionalMes')

const testeCoef = (expected, titulo, stringDate) => {
    const calculado = coeficiente(stringDate)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log(titulo)
    console.log(`Coeficiente do mês iniciado em ${stringDate}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Utilizado: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(calculado === esperado) console.log('\x1b[32m%s\x1b[0m',`O Coeficiente calculado ${calculado} e o simulado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeCoef(0.3448275862068966,'Teste com valor de fevereiro','20/02/2020')
testeCoef(0.3870967741935484,'Teste com valor de dezembro','20/12/2020')