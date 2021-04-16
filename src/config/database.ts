require('dotenv').config()

const database = {
    development: {
        username: "root",
        password: null,
        database: "graphql_db",
        host: "127.0.0.1",
        port: 3306,
        dialect:"mysql",
      },
      staging: {
        username: "root",
        password: null,
        database: "graphql_db",
        host: "127.0.0.1",
        port: 3306,
        dialect:"mysql",
      },
      production: {
        username: "root",
        password: null,
        database: "graphql_db",
        host: "127.0.0.1",
        port: 3306,
        dialect:"mysql",
      },
}

module.exports = database