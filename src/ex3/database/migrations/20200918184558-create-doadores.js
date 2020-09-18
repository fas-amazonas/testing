'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('doador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('doador');
  },
};
