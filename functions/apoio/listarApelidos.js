const listarApelidos = (data, mes, ano) => {
    let arrayApelidos = []
            for(i=1; i < data.values.length; i++){
                if(data.values[i][18] == "-" && new Date(data.values[i][17]) <= new Date(`${ano}-${mes}-28`)){
                    arrayApelidos.push([ano,mes,data.values[i][1],data.values[i][7],data.values[i][21]])
                }
                 else if(new Date(data.values[i][18]) >= new Date(`${ano}-${mes}-28`) && new Date(data.values[i][17]) <= new Date(`${ano}-${mes}-28`)){
                    arrayApelidos.push([ano,mes,data.values[i][1],data.values[i][7],data.values[i][21]])
                }
    }
        return {
           "values": arrayApelidos
        }
}

module.exports = listarApelidos