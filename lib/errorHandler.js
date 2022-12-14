'use strict'

function errorHandler (error) {
    console.error(error)
    throw new Error('Falló algo en el servidor')
}

module.exports = errorHandler