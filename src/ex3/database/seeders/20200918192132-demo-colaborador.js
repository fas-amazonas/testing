'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'colaborador',
      [
        {
          nome: 'Colaborador A',
          setor: 'Empreendedorismo',
          cargo: 'Coordenador',
        },
        {
          nome: 'Colaborador B',
          setor: 'Cidades Sustentáveis',
          cargo: 'Coordenador',
        },
        {
          nome: 'Colaborador C',
          setor: 'Regional Madeira',
          cargo: 'Coordenador',
        },
        {
          nome: 'Colaborador D',
          setor: 'Educação e Saúde',
          cargo: 'Gerente',
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
