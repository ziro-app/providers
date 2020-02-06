const rp = require('request-promise-native')
require('dotenv').config()

const main = async () => {
    try {
        return "Teste"
    } catch (error) {
        return error
    }

}

module.exports = main