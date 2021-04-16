import 'graphql-import-node';
import path from 'path'
import { makeExecutableSchema, } from 'graphql-tools';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files'

/**
 * Merge semua file didalam folder src/schemas
 */

const typeArray = loadFilesSync(path.join(__dirname, './schemas'), { extensions: ['graphql'] })
const mergedTypeDefs = mergeTypeDefs(typeArray)

/**
 * Merge semua fiel didalam resolvers src/resolvers
 */

const resolverArray = loadFilesSync(path.join(__dirname, './resolvers'), { extensions: ['ts'] })
const mergedResolvers = mergeResolvers(resolverArray)

const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers
})

export default schema;