import models from '../models'
import { IResolvers } from 'graphql-tools';

const {
    Type
} = models

const typeResolver: IResolvers = {
    Query: {
        async types () {
            return await Type.findAll()
        },
        async type(root: void, { id }) {
            return await Type.findByPk(id)
        }
    },
    Mutation: {
        /**
         * Create type
         * @param root 
         * @param formData 
         * @returns 
         */
        async addType(root: void, formData) {
            const type = await Type.create(formData)
            return type
        },
        /**
         * update type
         * @param root 
         * @param param1 
         * @returns 
         */
        async updateType(root: void, { id, ...formData }) {
            const type = await Type.findByPk(id)
            if (!type) throw new Error("Type tidak ditemukan")

            const newFormdata = {
                ...type.toJSON(),
                ...formData
            }
            return await type.update(newFormdata)
        },
        /**
         * Delete type
         * @param root 
         * @param param1 
         * @returns 
         */
        async deleteType(root: void, { id }) {
            const type = await Type.findByPk(id)
            if (!type) throw new Error("Type tidak ditemukan")
            
            await type.destroy({ force: true })

            return `Type dengan id : ${id}. Berhasil dihapus.`
        }
    }
}

export default typeResolver