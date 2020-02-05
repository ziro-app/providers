// error checks
// if header.length === data[0].length
// if values.length >= 2
// if is not null

// // Teste Condicionais
// const conditional = {
//   valueIsObject = typeof sheet.values == 'object'),
//   justOneArrayLength = sheet.values.length === 1,
//   moreThenTwoArrayLength = sheet.values.length >= 2,
//   columnHeaderEqualrow = header.length === data[0].length
// }

const dataSheets = {values:[['nome','sobrenome','idade'],["Ahmad","Forhat",24]]}

const arrayToObject = (sheet) => {
  // Try Catch da função
  try {
    if(typeof sheet.values == 'object'){
        if(sheet.values.length >= 2){
          const { values } = sheet;
          const [header, ...data] = values;
          if(header.length === data[0].length){
            const object = data.map(row => {
              return Object.fromEntries(
                row.map((column, index) => {
                  return [header[index], row[index]];
                })
              )
            })
            return object
          }else{
            throw "O número de colunas do cabeçalho tem que ser igual ao número de colunas do corpo"
          }
        }else{
          throw "A função não pode ser executada quando apresenta somente o cabeçalho"
        }
    }else{
      throw "Values do objeto não foi encontrado"
    }
  } catch (error) {
    return error
  }
}

console.log(arrayToObject(dataSheets))

module.exports = arrayToObject
