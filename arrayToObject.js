// error checks
// if header.length === data[0].length
// if values.length >= 2
// if is not null

const dataSheets = {values:[['nome','sobrenome','idade'],['Ahmad', 'Forhat', 24],['João', 'Berinjela',70]]}
const arrayToObject = (sheet) => {
  try {
    if(typeof sheet.values == 'object'){
      if(sheet.values.length >= 2){
        const { values } = sheet;
        const [header, ...data] = values;
        if( header.length === data[0].length){
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
        throw "Não pode executar a função apenas com o cabeçalho"
      }
    }else{
      throw "Erro ao procurar values no objeto passado"
    }
  } catch (error) {
    return error
  }
}

console.log(arrayToObject(dataSheets))

module.exports = arrayToObject
