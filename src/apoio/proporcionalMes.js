const stringDate = require('@ziro/string-to-date')

// Calculo do ultimo dia do mês
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

const coeficiente = (dataEntrou) =>{
    if(dataEntrou.toString().includes('/') || dataEntrou.toString().includes('-')){
        const data = stringDate(dataEntrou)
        const ano = data.getUTCFullYear()
        const mes = data.getMonth() + 1
        return (new Date(calculoUltimoDia(ano,mes) - data).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
    }else{
        return NaN
    }
}

module.exports = coeficiente