'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'projeto',
      [
        {
          titulo: 'AMAR PRA CONSERVAR',
          objetivo: 'SAÚDE',
          localidade_id: 1,
          colaborador_id: 1,
          doador_id: 1,
          status: 0,
        },
        {
          titulo: 'PESCA SÃO JOSÉ DA PRAIA GRANDE',
          objetivo: 'SUSTENTABILIDADE',
          localidade_id: 2,
          colaborador_id: 2,
          doador_id: 2,
          status: 1,
        },
        {
          titulo: 'PROJETO PIRARUCU SALGADO SECO',
          objetivo: 'EDUCAÇÃO',
          localidade_id: 3,
          colaborador_id: 3,
          doador_id: 1,
          status: 2,
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
