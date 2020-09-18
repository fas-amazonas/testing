module.exports = (sequelize, DataTypes) => {
  const Localidade = sequelize.define(
    'Localidade',
    {
      comunidade: DataTypes.STRING,
      unidade_conservacao: DataTypes.STRING,
      municipio: DataTypes.STRING,
      estado: DataTypes.STRING,
    },
    {
      tableName: 'localidade',
    }
  );

  return Localidade;
};
