'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('colaborador', {
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
      setor: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('colaborador');
  },
};
