// Segunda comissão dos assessores:
// Comissão é de 10% sobre a receita da venda e bonus conforme a quantidade vendida conforme a tabela abaixo:
//100000	500
//200000	900
//300000	1200
//400000	1400

const transNumb = (numero) => {
  return Number(numero.replace(",","."))
      }
    const base = receita_mes * 0.1;
    if (transacionado_mes >= 400000) return base + 1400
    if (transacionado_mes >= 300000)  return base + 1200
    if (transacionado_mes >= 200000)  return base + 900
    if (transacionado_mes >= 100000)  return base + 500
    return base
  };

// const assessor2 = (data) => {
//     let resultado = []
//     for(comissoes2020 of data.values){
//         if(comissoes2020[1] >= 2020){
//             resultado.push({"ano": comissoes2020[1],"mes": comissoes2020[0],"apelido": comissoes2020[2],"parcela2":assessor2020(transNumero(comissoes2020[4]), transNumero(comissoes2020[3]))})
//         }
//     }

//     return {"values": resultado}
// }



module.exports = assessor2020