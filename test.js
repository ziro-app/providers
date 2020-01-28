const test = require('ava')
const assessores2 = require('./functions/apoio/comissoes/asessores2')

const assessor = {
	values: [[
		'Rúbia da Conceição Almeida Goncalves',
		'Rubia',
		'27/03/1975',
		'rubia.ziro@gmail.com',
		'rubida@ziromoda.com.br',
		'+55 (11) 98292-1481',
		'+55 (11) 98292-1481',
		'2000,00',
		'Sim',
		'Assessor',
		'386.856.038-62',
		'29.806.516-2',
		'SSP-SP',
		'21/10/2002',
		'Casada',
		'Rua Mirador, 61,  Guarulhos, SP. CEP. 07243-390',
		'2015-01-01',
		'Ewertton (Filho) 98188-5155 Leo (Marido) 95972-2364',
		'Assessor2'
	]]
}

const comissao = {
	values: [[	
			'1',
			'2019',
			'Rubia',
			'21280,08',
			'R$ 212,80'
		]]
}

test('Comissão Assessor', t => {
	const value = assessores2(assessor, comissao, 1, 2019)
	const comissionCalculated = value.values[0][3]
	const comissionExpected = 2086.79
	t.is(comissionCalculated, comissionExpected)
})