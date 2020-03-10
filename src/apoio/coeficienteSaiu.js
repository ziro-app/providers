const stringDate = require('@ziro/string-to-date')

// Calculo do ultimo dia do mês
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

const coeficienteSaiu = (dataSaiu) =>{
    if(dataSaiu.toString().includes('/') || dataSaiu.toString().includes('-')){
        const data = stringDate(dataSaiu)
        const ano = data.getUTCFullYear()
        const mes = data.getMonth() + 1
        return (new Date(data).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
    }else{
        return NaN
    }
}

module.exports = coeficienteSaiu