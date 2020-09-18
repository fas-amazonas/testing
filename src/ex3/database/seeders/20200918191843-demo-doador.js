'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'doador',
      [
        {
          nome: 'John Doe',
          tipo: 'Tipo A',
          estado: 'AM',
        },
        {
          nome: 'Doador B',
          tipo: 'Tipo C',
          estado: 'MG',
        },
        {
          nome: 'Doador C',
          tipo: 'Tipo A',
          estado: 'AM',
        },
        {
          nome: 'Doador B',
          tipo: 'Tipo B',
          estado: 'SP',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
