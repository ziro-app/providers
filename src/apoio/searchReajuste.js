const stringDate = require('@ziro/string-to-date')

const searchReajuste = (apelido, dataProcurada, baseReajuste) => {
    let result = []
    if(baseReajuste){
        const filtrar = baseReajuste.filter(reajusteLine => {
            return (
                dataProcurada >= stringDate(reajusteLine.data) && reajusteLine.apelido === apelido
            )
        })
        if (filtrar.length) {
            const ultimo = filtrar.length - 1
            if (filtrar[ultimo].parcela1 !== '-') result.push(filtrar[ultimo].parcela1)
            if (filtrar[ultimo].modeloParcela2 !== '-') result.push(filtrar[ultimo].modeloParcela2)
            if (filtrar[ultimo].escopo !== '-') result.push(filtrar[ultimo].escopo)
        }
        return result
    }else{
        return []
    }
}

module.exports = searchReajuste