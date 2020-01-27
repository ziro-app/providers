const calculoNovo = require("./apoio/calculoNovo")
const calculoAntigo = require("./apoio/calculoAntigo")

const cobranca1 = (data, dataCalculo, mes, ano) => {
    const novo = calculoNovo(dataCalculo,mes,ano).replace(",",".")
    const antigo = calculoAntigo(dataCalculo,mes,ano).replace(",",".")
    const calculo = (novo, antigo) => {
        const calculo =  Number(novo)*0.007 + Number(antigo)*0.007
        return calculo
    }
    let resultado = []
    for(i=0; i < data.values.length; i++){
        if(data.values[i][4] == "Cobranca1" && ano == 2019 && mes > 8 || data.values[i][4] == "Cobranca1" && ano > 2019){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3], Math.round(calculo(novo,antigo)*100)/100, data.values[i][4]])
        }else if(data.values[i][5] == null){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4]])
        }else{
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4],data.values[i][5]])
        }
    }
    return {"values": resultado,            }
}

module.exports = cobranca1