const config = require("../../../knexfile")
const knex = require("knex")

//criando a conexão do knex com o db
const connection = knex(config.development)

module.exports = connection;