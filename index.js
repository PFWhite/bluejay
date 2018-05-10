const DatabaseConnection = require('./src/database_connection.js'),
      SQLQueries = require('./src/sql_queries.js'),
      DB = require('./src/db.js'),
      SQLResult = require('./src/sql_result.js')


function makeConnection(user, host, database, password, port) {
    return new DatabaseConnection({
        user, host, database, password, port
    })
}

function makeSQLQueries(directory, sqlTemplateRoot, options) {
    return new SQLQueries(directory, sqlTemplateRoot, options)
}

function makeDB(queries, connection, resultsConstructor=SQLResult) {
    return new DB(queries, connection, {
        resultsConstructor
    })
}

module.exports = {
    makeConnection,
    makeSQLQueries,
    makeDB
}
