'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('projeto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      objetivo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      localidade_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      doador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      colaborador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projeto');
  },
};
