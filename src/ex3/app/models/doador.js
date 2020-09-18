module.exports = (sequelize, DataTypes) => {
  const Doador = sequelize.define(
    'Doador',
    {
      nome: DataTypes.STRING,
      tipo: DataTypes.STRING,
      estado: DataTypes.STRING,
    },
    {
      tableName: 'doador',
    }
  );

  return Doador;
};
