'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('localidade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      comunidade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      unidade_conservacao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      municipio: {
        type: DataTypes.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('localidade');
  },
};
