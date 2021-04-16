#!/usr/bin/env node
import express from 'express'
import depthLimit from 'graphql-depth-limit'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import schema from '../schema'
import models from '../models/_instance'

/**
 * Initial Connection Database
 */

 models.sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.')
 })
 .catch((err: any) => {
   console.error('Unable to connect to the database:', err)
 })

const app = express()
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)]
})

app.use("*", cors())
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })



const httpServer = createServer(app)

httpServer.listen(
    { port: 8000 },
    () => console.info("Server has been started!.")
)