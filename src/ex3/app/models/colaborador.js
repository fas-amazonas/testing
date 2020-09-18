module.exports = (sequelize, DataTypes) => {
  const Colaborador = sequelize.define(
    'Colaborador',
    {
      nome: DataTypes.STRING,
      setor: DataTypes.STRING,
      cargo: DataTypes.STRING,
    },
    {
      tableName: 'colaborador',
    }
  );

  return Colaborador;
};
