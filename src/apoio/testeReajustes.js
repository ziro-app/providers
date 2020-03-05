const reajustes = require('./searchReajuste')

const base = [{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'João', data:'01/01/2020',escopo:'Dev',parcela1:2500, modeloParcela2:'Assessor2020'},{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'Bernardo', data:'01/01/2020',escopo:'Dev',parcela1:10000, modeloParcela2:'Banana'},{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'João', data:'01/03/2020',escopo:'Dev',parcela1:4000, modeloParcela2:'-'}]

const testeCoef = (expected, titulo, apelido,dataProcurada,baseReajuste) => {
    const simulado = reajustes(apelido, dataProcurada, baseReajuste)
    const esperado = expected
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Data procurada ${dataProcurada}`)
    console.log(`Simulado: ${simulado}`)
    console.log(`Utilizado: ${esperado}`)
    if(esperado.reajusteEscopo === simulado.reajusteEscopo && esperado.reajusteParcela1 == simulado.reajusteParcela1 && esperado.reajusteModeloParcela2 == simulado.reajusteModeloParcela2) console.log('\x1b[32m%s\x1b[0m',`O Valor reajustado ${simulado} e o esperado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado: Esperado:${esperado}, Simulado:${simulado}`)
}

testeCoef({reajusteParcela1:4000,reajusteEscopo:'Dev'}, 'Teste calculo com função completa', 'João',new Date(2020,3),base)
testeCoef({reajusteParcela1:2500,reajusteModeloParcela2:'Assessor2020',reajusteEscopo:'Dev'}, 'Teste calculo com função completa 2', 'João',new Date(2020,1),base)
testeCoef({reajusteParcela1:10000,reajusteModeloParcela2:'Banana',reajusteEscopo:'Dev'}, 'Teste calculo com função completa 3', 'Bernardo',new Date(2020,1),base)
testeCoef({}, 'Teste calculo com função nome sem nada na lista', 'Pedro',new Date(2020,3),base)
testeCoef({}, 'Teste calculo com data em formato errado', 'João','20/12/2020',base)
testeCoef({}, 'Teste calculo com data em formato errado2', 'João','banana',base)
testeCoef({}, 'Teste calculo com base vazia', 'João',new Date(2020,3),[])
testeCoef({}, 'Teste calculo com base NaN', 'João',new Date(2020,3),NaN)
testeCoef({}, 'Teste calculo com base undefined', 'João',new Date(2020,3),undefined)
testeCoef({}, 'Teste calculo com base zero', 'João',new Date(2020,3),0)