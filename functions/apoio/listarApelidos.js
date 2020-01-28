const listarApelidos = (data, mes, ano) => {
    if(mes != undefined || ano != undefined){
        let arrayApelidos = []
            for(let i=0; i < data.values.length; i++){
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
        }else{
            let arrayApelidos = []
            for(listar of data.values){
                for(n=2018; n <= new Date().getFullYear(); n++){
                    for(let i=1; i <= 12; i++){
                            if(listar[18] == "-" && new Date(`${n}-${i}-28`) >= new Date(listar[17])){
                                arrayApelidos.push([n,i,listar[1],listar[7],listar[21]])
                            }else if(new Date(`${n}-${i}-28`) >= new Date(listar[17]) && new Date(listar[18]) >= new Date(`${n}-${i}-01`)){
                                arrayApelidos.push([n,i,listar[1],listar[7],listar[21]])
                            }
                    }
                }
            }
            return {
                "values": arrayApelidos
            }
        }
}

module.exports = listarApelidos