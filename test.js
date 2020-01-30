const test = require("ava");
const assessor2020 = require("./functions/apoio/comissoes/asessores2020");
const assessores2019 = require("./functions/apoio/comissoes/assessores2019")

const dados = {
  receita_mes_ziro: 150000,
  transacionado_mes: 300000,
  receita_mes: 24000,
  receitas_mes_novo_cliente:[200,3000,500,1000,1500],
  receita_mes_novo_afiliado: 15000,
  receita_mes_antigo: 20000,
  cobrancas_mes: 100000
};

test("Comissão Assessor 2020", t => {
  const value = assessor2020(dados.transacionado_mes, dados.receita_mes);
  const comissionCalculated = value;
  const comissionExpected = 3600;
  t.is(comissionCalculated, comissionExpected);
});

test('Comissão Assessores 2019', async t => {
  const value = assessores2019(dados.receitas_mes_novo_cliente,dados.receita_mes_novo_afiliado,dados.receita_mes_antigo);
  const comissionCalculated = value;
  const comissionExpected = 4580;
  t.is(comissionCalculated, comissionExpected);
});


test('Comissão Assessor2', t => {
	const value = assessores2(dataAssessores2)
	console.log(value)
	const comissionCalculated = value.values[0].parcela2
	const comissionExpected = 3733.12
	t.is(comissionCalculated, comissionExpected)
})