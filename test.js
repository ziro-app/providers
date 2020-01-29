
const test = require('ava')
const assessores2 = require('./functions/apoio/comissoes/asessores2')

const dataAssessores2 =  {
    "range": "'Apoio Comissões Assessores'!A2:E45633",
    "majorDimension": "ROWS",
    "values": [
		[
            "1",
            "2020",
            "Rubia",
            "23331,22",
            "421755,96"
        ]
    ]
}

test('Comissão Assessor', t => {
	const value = assessores2(assessor, comissao, 12, 2019)
	console.log(value)
	const comissionCalculated = value.values[0][4]
	const comissionExpected = 932.7
	t.is(comissionCalculated, comissionExpected)
})