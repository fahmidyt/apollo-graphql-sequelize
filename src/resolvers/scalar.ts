import { GraphQLScalarType } from 'graphql'


const dateScalar = {
    Date: new GraphQLScalarType({
        name: 'Date',
        parseValue(value: any) {
            return new Date(value)
        },
        serialize(value: any) {
            return value.toISOString()
        }
    })
}

export default dateScalar