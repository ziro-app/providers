const calculoNovo = (dataCalculo,mes,ano) => {
    for(let i = 0; i < dataCalculo.values.length; i++){
        if(dataCalculo.values[i][0] == ano && dataCalculo.values[i][1] == mes && dataCalculo.values[i][2] == "Novo"){
            return dataCalculo.values[i][3]
        }
    }
}

module.exports = calculoNovo