import Pokemon from './pokemon'
import Type from './type'

const models = {
    Pokemon,
    Type
}

export default models

export type MyModels = typeof models

Object.entries(models).map( ([, model]) => {
    if (model?.associate) {
        model.associate(models)
    }

    return model
} )