const reajustes = require('./searchReajuste')

const base = [{cadastro:'0b8d5c2787b12438e31ce559cd173fd5', apelido:'João', data:'01/03/2020',escopo:'Dev',parcela1:4000, modeloParcela2:'-'}]

const testeCoef = (expected, titulo, apelido,dataProcurada,baseReajuste) => {
    const simulado = reajustes(apelido, dataProcurada, baseReajuste)
    const esperado = expected
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Data procurada ${dataProcurada}`)
    console.log(`Simulado: ${simulado}`)
    console.log(`Utilizado: ${esperado}`)
    if(esperado[0] === simulado[0] && esperado[1] == simulado[1] && esperado[2] == simulado[2]) console.log('\x1b[32m%s\x1b[0m',`O Valor reajustado ${simulado} e o esperado ${esperado} são iguais`)
    else console.log('\x1b[31m%s\x1b[0m', `Simulação não está com o mesmo valor do esperado: Esperado:${esperado}, Simulado:${simulado}`)
}

testeCoef([4000,'Dev'], 'Teste calculo com função completa', 'João',new Date(2020,3),base)
testeCoef([], 'Teste calculo com função nome sem nada na lista', 'Pedro',new Date(2020,3),base)
testeCoef([], 'Teste calculo com data em formato errado', 'João','20/12/2020',base)
testeCoef([], 'Teste calculo com data em formato errado2', 'João','banana',base)
testeCoef([], 'Teste calculo com base vazia', 'João',new Date(2020,3),[])