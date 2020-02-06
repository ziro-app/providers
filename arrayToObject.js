const decimalUsa = require('@ziro/decimal-usa')

const arrayToObject = ({ values }) => {
  // Mensagens de erro
  const erro1 = "values deve ser um objeto"
  const erro2 = "values deve ter um cabeçalho e um corpo"
  const erro3 = "qtde colunas do cabeçalho deve ser igual a qtde colunas do corpo"
  // Condicionais e codigo
  if (typeof values !== 'object') throw erro1
  if (values.length < 2) throw erro2
  const [header, ...data] = values
  if (header.length !== data[0].length) throw erro3
  return data.map(row => {
    return Object.fromEntries(
      row.map((column, index) => {
        const number = decimalUsa(row[index])
        if(isNaN(number)) return [header[index], row[index]]
        return [header[index], number]
      })
    )
  })
}

module.exports = arrayToObject