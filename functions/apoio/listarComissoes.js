const listarComissoes = (dataAssessor, dataResto, mes, ano) => {
    let resultado = []
    for(i=1; i < dataAssessor.values.length; i++){
            if(dataAssessor.values[i][0] == mes & dataAssessor.values[i][1] == ano){
                resultado.push([dataAssessor.values[i][2],dataAssessor.values[i][4]])
            }
        }
        let resultadoResto = []
        for(i=1; i < dataResto.values.length; i++){
            resultadoResto.push([dataResto.values[i][0+4*(mes-1)], dataResto.values[i][2+4*(mes-1)]])
        }
        resultado.push(resultadoResto)
        console.log(resultado)
        return {
                "values": resultado
            }
}

module.exports = listarComissoes