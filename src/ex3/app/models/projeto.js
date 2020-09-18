const { Localidade, Doador, Colaborador } = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define(
    'Projeto',
    {
      titulo: DataTypes.STRING,
      objetivo: DataTypes.STRING,
      localidade_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Localidade,
          key: 'id',
        },
      },
      doador_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Doador,
          key: 'id',
        },
      },
      colaborador_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Colaborador,
          key: 'id',
        },
      },
      status: DataTypes.INTEGER,
    },
    {
      tableName: 'projeto',
    }
  );

  return Projeto;
};
