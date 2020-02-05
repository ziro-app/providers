const strBrasilianToEuaNumber = numb => {
  if (!isNaN(Number(numb.toString().replace(",", "."))))
    return Math.round(Number(numb.toString().replace(",", ".")) * 100) / 100;
  return numb;
};

const arrayToObject = ({values}) => {
    // Trocando o nome das variaveis e condicionais
    let respostaMenorQueDois = "A função não pode ser executada sem pelo menos apresenta um cabeçalho e um corpo"
    let respostaTypeOf = "Values do objeto não foi encontrado ou sua resposta não é um objeto"
    let resBodyEqualHeader = "O número de colunas do cabeçalho tem que ser igual ao número de colunas do corpo"
    let tipoObjeto = typeof values == 'object'
    let temCabecalhoCorpo = values.length >= 2
    // Começo das condicionais e codigo
    if(tipoObjeto){
      if(temCabecalhoCorpo){
        const [header, ...data] = values;
        let columnEqualHeaderBody = header.length === data[0].length
          if(columnEqualHeaderBody){
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

module.exports = arrayToObject