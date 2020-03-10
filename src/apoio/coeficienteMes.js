const stringDate = require('@ziro/string-to-date')

// Calculo do ultimo dia do mês --> identificar a quantidade de dias do mês procurado
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

const coeficiente = (dataEntrou) =>{
    if(dataEntrou.toString().includes('/') || dataEntrou.toString().includes('-')){
        const data = stringDate(dataEntrou)
        const ano = data.getUTCFullYear()
        const mes = data.getMonth() + 1
        // (ultimoDia - diaEntrou)/ultimoDia
        return (new Date(calculoUltimoDia(ano,mes) - data).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
    }else{
        return NaN
    }
}

module.exports = coeficiente