// Segunda comissão dos assessores:
// Comissão é de 10% sobre a receita da venda e bonus conforme a quantidade vendida conforme a tabela abaixo:
//100000	500
//200000	900
//300000	1200
//400000	1400

const transNumb = (numero) => {
    return Number(numero.replace(",","."))
        }
const assessor2020 = (transacionado_mes, receita_mes) => {
    const base = receita_mes * 0.1;
    if (transacionado_mes >= 400000) return Math.round((base + 1400)*100)/100
    if (transacionado_mes >= 300000) return Math.round((base + 1200)*100)/100
    if (transacionado_mes >= 200000) return Math.round((base + 900)*100)/100
    if (transacionado_mes >= 100000) return Math.round((base + 500)*100)/100
    else return Math.round(base*100)/100
  };
            }
        }

    return {"values": resultado}
}



module.exports = assessor2