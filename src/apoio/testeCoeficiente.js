const coeficiente = require('./proporcionalMes')

const testeCoef = (expected, calculate, titulo) => {
    const calculado = calculate
    const esperado = expected
    console.log(titulo)
    console.log('Calculado', calculado, 'Esperado', esperado)
    if(calculado === esperado) console.log('Resultado do teste:', 'PASSOU!!! :)')
    else console.log('Resultado do teste:', 'NÃO PASSOU')
}

const result1 = coeficiente('20/01/2020',2020,1)
const result2 = coeficiente('20/02/2020',2020,2)

testeCoef(0.3870967741935484,result1,'Teste mês janeiro')
testeCoef(0.3448275862068966,result2,'Teste mês janeiro')