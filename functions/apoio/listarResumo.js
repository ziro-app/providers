const listarResumo = (data, mes) =>{
    let resultado = {"values":[]}
    for(i=0; i < data.values.length; i++){
        if(data.values[i][0] = mes){
            resultado.values.push({
                "Nome": data.values[i][1],
                "Parcela1": data.values[i][2],
                "Parcela2": data.values[i][3],
                "Total": data.values[i][4]
            })
        }
    }
    return resultado
}

module.exports = listarResumo