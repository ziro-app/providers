const reajustes = require('../searchReajuste')
const coeficiente = require('../coeficienteMes')

const base = [{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'João', data:'01/01/2020',escopo:'Dev',parcela1:2500, modeloParcela2:'Assessor2020'},{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'Bernardo', data:'01/01/2020',escopo:'Dev',parcela1:10000, modeloParcela2:'Banana'},{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'João', data:'01/03/2020',escopo:'Dev',parcela1:4000, modeloParcela2:'-'}]

const testReajustes = (expected, titulo, apelido,dataProcurada,baseReajuste) => {
    const simulado = reajustes(apelido, dataProcurada, baseReajuste)
    const esperado = expected
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Data procurada ${dataProcurada}`)
    console.log(`Simulado: ${simulado.parcela1}, ${simulado.modeloParcela2}, ${simulado.escopo}`)
    console.log(`Utilizado: ${esperado.parcela1}, ${esperado.modeloParcela2}, ${esperado.escopo}`)
    if(esperado.parcela1 === simulado.reajusteParcela1 && esperado.reajusteModeloParcela2 == simulado.modeloParcela2 && esperado.escopo == simulado.reajusteEscopo) console.log('\x1b[32m%s\x1b[0m',`O Valor reajustado ${simulado.parcela1,simulado.parcela2,simulado.modeloParcela2} e o esperado ${esperado.parcela1, esperado.modeloParcela2, esperado.escopo} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado: Esperado:${esperado.parcela1}, ${esperado.parcela2}, ${esperado.modeloParcela2}, Simulado:${simulado.parcela1}, ${simulado.modeloParcela2}, ${simulado.escopo}`)
}

const testCombinado = (expected, titulo, apelido,dataProcurada,baseReajuste,stringDateEntrou,stringDateSaiu,mes) => {
    const simulado = reajustes(apelido, dataProcurada, baseReajuste)
    const coef = coeficiente(stringDateEntrou,stringDateSaiu,mes)
    const result = simulado.reajusteParcela1*coef
    const esperado = expected
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Data procurada ${dataProcurada}`)
    console.log(`Simulado: ${result}`)
    console.log(`Utilizado: ${esperado}`)
    if(result === esperado) console.log('\x1b[32m%s\x1b[0m',`O Valor reajustado ${result} e o esperado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado: Esperado:${esperado}, Simulado:${result}`)
}
// teste combinado entre coeficiente e reajuste

testCombinado(2580.6451612903224, 'Teste calculo com função de reajuste e coeficiente juntos', 'João',new Date(2020,3),base,'01/03/2020','20/03/2020',3)
testReajustes({parcela1:2500,modeloParcela2:'Assessor2020',escopo:'Dev'}, 'Teste calculo com função completa 1', 'João',new Date(2020,1),base)
testReajustes({parcela1:10000,modeloParcela2:'Banana',escopo:'Dev'}, 'Teste calculo com função completa 2', 'Bernardo',new Date(2020,1),base)
testReajustes({}, 'Teste calculo com função nome sem nada na lista', 'Pedro',new Date(2020,3),base)
testReajustes({}, 'Teste calculo com data em formato errado', 'João','20/12/2020',base)
testReajustes({}, 'Teste calculo com data em formato errado2', 'João','banana',base)
testReajustes({}, 'Teste calculo com base vazia', 'João',new Date(2020,3),[])
testReajustes({}, 'Teste calculo com base NaN', 'João',new Date(2020,3),NaN)
testReajustes({}, 'Teste calculo com base undefined', 'João',new Date(2020,3),undefined)
testReajustes({}, 'Teste calculo com base zero', 'João',new Date(2020,3),0)