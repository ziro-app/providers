const calculoNovo = (dataCalculo,mes,ano) => {
    for(let i = 0; i < dataCalculo.values.length; i++){
        if(dataCalculo.values[i][0] == ano && dataCalculo.values[i][1] == mes && dataCalculo.values[i][2] == "Novo"){
            return dataCalculo.values[i][3]
        }
    }
}
const calculoAntigo = (dataCalculo,mes,ano) => {
    for(let i = 0; i < dataCalculo.values.length; i++){
        if(dataCalculo.values[i][0] == ano && dataCalculo.values[i][1] == mes && dataCalculo.values[i][2] == "Antigo"){
            return dataCalculo.values[i][3]
        }
    }
}
const prospeccao = (data, dataCalculo, mes, ano) => {
    const novo = calculoNovo(dataCalculo,mes,ano).replace(",",".")
    const antigo = calculoAntigo(dataCalculo,mes,ano).replace(",",".")
    const calculo = (novo, antigo) => {
        if((Number(novo) + Number(antigo))*10 >= 300000){
            return Number(novo)*0.2 + Number(antigo)*0.1 + 1000
        }else{
            return Number(novo)*0.2 + Number(antigo)*0.1
        }
    }
    let resultado = []
    for(i=0; i < data.values.length; i++){
        if(data.values[i][4] == "Prospeccao1" && ano == 2019 && mes > 8 || data.values[i][4] == "Prospeccao1" && ano > 2019){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3], calculo(novo,antigo), data.values[i][4]])
        }else if(data.values[i][5] == null){
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4]])
        }else{
            resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],data.values[i][3],data.values[i][4],data.values[i][5]])
        }
    }
    return {"values": resultado}
}

module.exports = prospeccao