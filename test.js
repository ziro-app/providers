const test = require('ava')
const assessores2 = require('./functions/apoio/comissoes/asessores2')

// const assessor = {
// 	values: [[
// 		'Rúbia da Conceição Almeida Goncalves',
// 		'Rubia',
// 		'27/03/1975',
// 		'rubia.ziro@gmail.com',
// 		'rubida@ziromoda.com.br',
// 		'+55 (11) 98292-1481',
// 		'+55 (11) 98292-1481',
// 		'2000,00',
// 		'Sim',
// 		'Assessor',
// 		'386.856.038-62',
// 		'29.806.516-2',
// 		'SSP-SP',
// 		'21/10/2002',
// 		'Casada',
// 		'Rua Mirador, 61,  Guarulhos, SP. CEP. 07243-390',
// 		'2015-01-01',
// 		'Ewertton (Filho) 98188-5155 Leo (Marido) 95972-2364',
// 		'Assessor2'
// 	]]
// }

const assessor = {
	values: [[
		12,
		2019,
		'Rubia',
		'2000,00',
		'Assessor2'
	]]
}

const comissao = {
<<<<<<< HEAD
	values: [[	
			'1',
=======
	values: [[
			'12',
>>>>>>> bf8945956903d58c081dff1da23b2210914459fd
			'2019',
			'Rubia',
			'9327,18',
			'R$ 212,80'
		]]
}

test('Comissão Assessor', t => {
	const value = assessores2(assessor, comissao, 12, 2019)
	console.log(value)
	const comissionCalculated = value.values[0][4]
	const comissionExpected = 932.7
	t.is(comissionCalculated, comissionExpected)
})