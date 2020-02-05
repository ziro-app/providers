// error checks
// if header.length === data[0].length
// if values.length >= 2
// if is not null

// // Teste Condicionais
// const conditional = {
//   valueIsObject = typeof sheet.values == 'object'),
//   moreThenTwoArrayLength = sheet.values.length >= 2,
//   columnHeaderEqualrow = header.length === data[0].length
// }

// Fazer função if que transforma em numero --> brasilianDecimalToNumberEua

const strBrasilianToEuaNumber = numb => {
  if (!isNaN(Number(numb.toString().replace(",", "."))))
    return Math.round(Number(numb.toString().replace(",", ".")) * 100) / 100;
  return numb;
};

const arrayToObject = (sheet) => {
    let respostaMenorQueDois = "A função não pode ser executada sem pelo menos apresenta um cabeçalho e um corpo"
    let respostaTypeOf = "Values do objeto não foi encontrado"
    let resBodyEqualHeader = "O número de colunas do cabeçalho tem que ser igual ao número de colunas do corpo"
    if(typeof sheet.values == 'object'){
        if(sheet.values.length >= 2){
          const { values } = sheet;
          const [header, ...data] = values;
          if(header.length === data[0].length){
            const object = data.map(row => {
              return Object.fromEntries(
                row.map((column, index) => {
                  let numbOrString = strBrasilianToEuaNumber(row[index])
                  return [header[index], numbOrString];
                })
              )
            })
            return object
          }else{
            throw resBodyEqualHeader
          }
        }else{
          throw respostaMenorQueDois
        }
    }else{
      throw respostaTypeOf
    }
}

console.log(arrayToObject(dataSheets))

module.exports = arrayToObject