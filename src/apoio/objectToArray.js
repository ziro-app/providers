const objectToArray = object => {
    const header = Object.keys(object[0][0])
    const body = object
        .map(person => person.map(month => Object.values(month)))
        .flat()
    return [header, ...body]
}

module.exports = objectToArray