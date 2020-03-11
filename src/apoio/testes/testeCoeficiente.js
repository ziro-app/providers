const coeficiente = require('../coeficienteMes')

const testeCoef = (expected, titulo, stringDate) => {
    const calculado = coeficiente(stringDate)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Coeficiente do mês iniciado em ${stringDate}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Utilizado: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(!diferenca) console.log('\x1b[32m%s\x1b[0m',`O Coeficiente calculado ${calculado} e o simulado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeCoef(0.3448275862068966,'Teste coef com valor data de fevereiro','20/02/2020')
testeCoef(0.3870967741935484,'Teste coef com valor data de dezembro','20/12/2020')
testeCoef(1,'Teste coef com valor data de dezembro','01/12/2020')
testeCoef(0.3870967741935484,'Teste coef com valor data de dezembro com -','20-12-2020')
testeCoef(0.6774193548387096,'Teste coef com valor data de dezembro com -','11-12-2020')
testeCoef(NaN,'Teste coef com formato diferente de data','12/jan./2020')
testeCoef(NaN,'Teste coef com valor data de string','batata')
testeCoef(NaN,'Teste coef com valor data number',1)
testeCoef(NaN,'Teste coef com valor data number decimal',1.232)
testeCoef(NaN,'Teste coef com valor data number array',[])
testeCoef(NaN,'Teste coef com valor data number objeto',{})
testeCoef(NaN,'Teste coef com valor data number zero',0)