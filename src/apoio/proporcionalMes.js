const stringDate = require('@ziro/string-to-date')

// Calculo do ultimo dia do mês
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

const coeficiente = (dataEntrou, ano, mes) =>{
    return (new Date(calculoUltimoDia(ano,mes) - stringDate(dataEntrou)).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
}

module.exports = coeficiente