const calculoNovo = require("./apoio/calculoNovo")
const calculoAntigo = require("./apoio/calculoAntigo")

const prospeccao = (data, dataCalculo, mes, ano) => {
    const novo = calculoNovo(dataCalculo,mes,ano).replace(",",".")
    const antigo = calculoAntigo(dataCalculo,mes,ano).replace(",",".")
    const calculo = (novo, antigo) => {
        if((Number(novo) + Number(antigo))*10 >= 100000){
            return Number(novo)*0.2 + Number(antigo)*0.1 + 1000
        }else{
            return Number(novo)*0.2 + Number(antigo)*0.1
        }
    }
    let resultado = []
    for(i=0; i < data.values.length; i++){
        if(data.values[i][4] == "Prospeccao1" && ano == 2019 && mes > 8 || data.values[i][4] == "Prospeccao1" && ano > 2019){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3], Math.round(calculo(novo,antigo)*100)/100, data.values[i][4]])
        }else if(data.values[i][5] == null){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4]])
        }else{
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4],data.values[i][5]])
        }
    }
    return {"values": resultado}
}

module.exports = prospeccao