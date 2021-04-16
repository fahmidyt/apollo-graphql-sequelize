import { Model, Optional } from 'sequelize'
import SequelizeAttributes from '../utils/SequelizeAttributes'

import db from './_instance'

export interface TypeAttributes {
  id: string
  type: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

interface TypeCreationAttributes extends Optional<TypeAttributes, 'id'> {}

export interface TypeInstance
  extends Model<TypeAttributes, TypeCreationAttributes>,
    TypeAttributes {}

const Type = db.sequelize.define<TypeInstance>(
  'Types',
  {
    ...SequelizeAttributes.Types,
  },
  { paranoid: true }
)

export default Type