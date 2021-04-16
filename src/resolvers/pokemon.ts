import models from '../models'
import { IResolvers } from 'graphql-tools';

const {
    Pokemon,
    Type
} = models

const pokemonResolver: IResolvers = {
    Query: {
        async pokemons (_, { limit }) {
            return await Pokemon.findAll({
                include: [{ model: Type }]
            })
        },
        async pokemon(root: void, { id }) {
            return await Pokemon.findByPk(id)
        }
    },
    Mutation: {
        /**
         * Create pokemon
         * @param root 
         * @param formData 
         * @returns 
         */
        async addPokemon(root: void, formData) {
            const pokemon = await Pokemon.create(formData)
            return pokemon
        },
        /**
         * update pokemon
         * @param root 
         * @param param1 
         * @returns 
         */
        async updatePokemon(root: void, { id, ...formData }) {
            console.log(formData)
            const pokemon = await Pokemon.findByPk(id)
            if (!pokemon) throw new Error("Pokemon tidak ditemukan")

            const newFormdata = {
                ...pokemon.toJSON(),
                ...formData
            }
            return await pokemon.update(newFormdata)
        }
    }
}

export default pokemonResolver