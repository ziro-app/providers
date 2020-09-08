const coeficiente = require('../coeficienteMes')

const testeCoef = (expected, stringDateEntrou, stringDateSaiu,mes) => {
    const calculado = coeficiente(stringDateEntrou,stringDateSaiu,mes)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',`Coeficiente simulado de entrada em ${stringDateEntrou} e saida ${stringDateSaiu} `) // mudar titulo pra ficar melhor
    console.log(`Simulado: ${calculado}`)
    console.log(`Utilizado: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(!diferenca) console.log('\x1b[32m%s\x1b[0m',`O Coeficiente calculado ${calculado} e o simulado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeCoef(0.3448275862068966,'20/02/2020','01/01/2020',2)
testeCoef(0.36666666666666664,'20/11/2020','01/12/2020',11)
testeCoef(0.1935483870967742,'20/12/2020','25/12/2020',12)
testeCoef(0.3870967741935484,'20/12/2020','-',12)
testeCoef(0.3870967741935484,'20/12/2020','01/12/2021',12)
testeCoef(0.3870967741935484,'20-12-2020','01/01/2020',2)
testeCoef(0.6774193548387096,'11-12-2020','01/01/2020',2)
testeCoef(1,'01/12/2020','01/01/2020',2)
testeCoef(NaN,'20/12/2020','01/12/2020',12)
testeCoef(NaN,'batata','banana',2)
testeCoef(NaN,1,1,2)
testeCoef(NaN,1.232,1.2131,2)
testeCoef(NaN,[],[],2)
testeCoef(NaN,{},{},2)
testeCoef(NaN,0,0,2)
testeCoef(NaN,'-','-',2)
testeCoef(NaN,'aaa','-',2)