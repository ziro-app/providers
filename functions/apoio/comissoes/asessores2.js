// Segunda comissão dos assessores:
// Comissão é de 1% das vendas realizadas e bonus conforme a quantidade vendida conforme a tabela abaixo:
//100000	500
//200000	900
//300000	1200
//400000	1400

const assessor2 = (data,dataBaseAssessores, mes,ano) => {
    let resultado1 = []
    for(i=0; i < dataBaseAssessores.values.length; i++){
        if(dataBaseAssessores.values[i][0] == mes && dataBaseAssessores.values[i][1] == ano){
            resultado1.push(dataBaseAssessores.values[i][0],dataBaseAssessores.values[i][1],dataBaseAssessores.values[i][2],dataBaseAssessores.values[i][3])
        }
    }
    let resultado =  []
        for(i=0; i< data.values.length; i++){
            let index = resultado1.indexOf(data.values[i][2])
            if(index !== -1 && ano == 2019 && mes > 8 && data.values[i][2] || index !== -1 && ano > 2019){
                if(Math.round(Number(resultado1[index+1].replace(",","."))) >= 400000){
                    resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],(Math.round(Number(resultado1[index+1].replace(",",".")))/100)+1400])
                }else if(Math.round(Number(resultado1[index+1].replace(",","."))) >= 300000){
                    resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],(Math.round(Number(resultado1[index+1].replace(",",".")))/100)+1200])
                }else if(Math.round(Number(resultado1[index+1].replace(",","."))) >= 200000){
                    resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],(Math.round(Number(resultado1[index+1].replace(",",".")))/100)+900])
                }else if(Math.round(Number(resultado1[index+1].replace(",","."))) >= 100000){
                    resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],(Math.round(Number(resultado1[index+1].replace(",",".")))/100)+500])
                }else{
                    resultado.push([data.values[i][0],data.values[i][1],data.values[i][2],(Math.round(Number(resultado1[index+1].replace(",",".")))/100)+0])
                }
            }else{
                resultado.push([data.values[i][0],data.values[i][1],data.values[i][2]])
            }
        }

    return resultado
}



module.exports = assessor2