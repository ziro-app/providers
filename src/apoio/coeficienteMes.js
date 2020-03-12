const stringDate = require('@ziro/string-to-date')

// Calculo do ultimo dia do mês --> identificar a quantidade de dias do mês procurado
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

const coeficiente = (dataEntrou,dataSaiu,mes) =>{
    if(dataEntrou.toString().includes('/') &&  (dataSaiu.toString().includes('/') || dataSaiu.toString().includes('-')) || dataEntrou.toString().includes('-') && (dataSaiu.toString().includes('/') || dataSaiu.toString().includes('-'))){
        const entrouEsseMes = (stringDate(dataEntrou)).getFullYear() === new Date().getFullYear() && (stringDate(dataEntrou)).getMonth()+1 === mes
        const saiuEsseMes = (stringDate(dataSaiu)).getFullYear() === new Date().getFullYear() && (stringDate(dataSaiu)).getMonth()+1 === mes
        const continuaNaZiro =  dataSaiu === '-' && stringDate(dataEntrou) <= new Date(new Date().getFullYear(),mes) || dataSaiu !== '-' && stringDate(dataSaiu) >= new Date(new Date().getFullYear(),mes) && stringDate(dataEntrou) <= new Date(new Date().getFullYear(),mes)
        if(entrouEsseMes && !saiuEsseMes){
            const data = stringDate(dataEntrou)
            const ano = data.getUTCFullYear()
            const mes = data.getMonth() + 1
            // (ultimoDia - diaEntrou)/ultimoDia
            const calcCoeficiente = (new Date(calculoUltimoDia(ano,mes) - data).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
            if(calcCoeficiente >= 0) return calcCoeficiente
            return NaN
        }if(saiuEsseMes && !entrouEsseMes){
            const data = stringDate(dataSaiu)
            const ano = data.getUTCFullYear()
            const mes = data.getMonth() + 1
            // (diaSaiu - primeiroDia)/ultimoDia
            const calcCoeficiente = (new Date(data).getDate())/(new Date(calculoUltimoDia(ano,mes))).getDate()
            if(calcCoeficiente >= 0) return calcCoeficiente
            return NaN
        }if(saiuEsseMes && entrouEsseMes){
            const dataSaida = stringDate(dataSaiu)
            const dataEntrada = stringDate(dataEntrou)
            const ano = dataSaida.getUTCFullYear()
            const mes = dataSaida.getMonth() + 1
            // (diaSaiu - diaEntrou)/ ultimoDia
            const calcCoeficiente = ((new Date(dataSaida).getDate() - new Date(dataEntrada).getDate())+1)/(new Date(calculoUltimoDia(ano,mes))).getDate()
            if(calcCoeficiente >= 0) return calcCoeficiente
            return NaN
        }if(continuaNaZiro){
            return 1
        } 
    }else{
        return NaN
    }
}

module.exports = coeficiente