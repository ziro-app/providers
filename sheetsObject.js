const stringJson = (data) => {
    let baseData = data.values
    let textJson = ''
    let cabecalho = data.values[0]
    for(let dado of baseData){
        for(let i = 0; i < cabecalho.length; i++){
            if(i === 0){
                textJson += `{"${cabecalho[i]}":"${dado[i]}",`
            }
            if(i > 0 && i < (cabecalho.length)-1){
                textJson += `"${cabecalho[i]}":"${dado[i]}",`
            }
            if(i === (cabecalho.length)-1){
                textJson += `"${cabecalho[i]}":"${dado[i]}"}#`
            }
        }
    }
    return textJson
}

const sheetsJson = async (data) => {
    let resultFinal = []
    const objectoJSON = stringJson(data).split('#')
    for(let n = 1; n < (objectoJSON.length) -1; n++){
        resultFinal.push(JSON.parse(objectoJSON[n]))
    }
    try {
        return resultFinal
    } catch (error) {
        console.log(error)
    }
}

module.exports = sheetsJson