const listarApelidos = (data, mes, ano) => {
    let arrayApelidos = []
            for(i=1; i < data.values.length; i++){
                if(data.values[i][18] == "-" && new Date(data.values[i][17]) <= new Date(`${ano}-${mes}-28`)){
                    arrayApelidos.push([data.values[i][1]])
                }
                 else if(new Date(data.values[i][18]) >= new Date(`${ano}-${mes}-28`) && new Date(data.values[i][17]) <= new Date(`${ano}-${mes}-28`)){
                    arrayApelidos.push(data.values[i][1])
                }
    }
        return {
           "values": arrayApelidos
        }
}

module.exports = listarApelidos