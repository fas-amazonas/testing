'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'localidade',
      [
        {
          comunidade: 'Comunidade A',
          unidade_conservacao: 'Unidade A',
          municipio: 'Mun A',
          estado: 'AM',
        },
        {
          comunidade: 'Comunidade B',
          unidade_conservacao: 'Unidade B',
          municipio: 'Mun B',
          estado: 'AM',
        },
        {
          comunidade: 'Comunidade C',
          unidade_conservacao: 'Unidade C',
          municipio: 'Mun C',
          estado: 'AM',
        },
        {
          comunidade: 'Comunidade D',
          unidade_conservacao: 'Unidade D',
          municipio: 'Mun D',
          estado: 'AM',
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
