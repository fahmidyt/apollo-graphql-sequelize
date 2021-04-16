import { Model, Optional } from 'sequelize'
import SequelizeAttributes from '../utils/SequelizeAttributes'

import db from './_instance'

export interface PokemonAttributes {
  id: string
  typeId: string
  name: string
  hp: number
  defense: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

interface PokemonCreationAttributes extends Optional<PokemonAttributes, 'id'> {}

export interface PokemonInstance
  extends Model<PokemonAttributes, PokemonCreationAttributes>,
    PokemonAttributes {}

const Pokemon = db.sequelize.define<PokemonInstance>(
  'Pokemons',
  {
    ...SequelizeAttributes.Pokemons,
  },
  { paranoid: true }
)

Pokemon.associate = (models) => {
  Pokemon.belongsTo(models.Type, { foreignKey: 'typeId', targetKey: 'id' })
}

export default Pokemon