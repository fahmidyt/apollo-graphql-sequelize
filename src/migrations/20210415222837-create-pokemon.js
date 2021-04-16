'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hp: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      defense: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pokemons');
  }
};
