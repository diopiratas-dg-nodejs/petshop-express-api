module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
      'Usuario',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
        },
        nome: {
          type: DataTypes.STRING,
        },
        senha: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: 'usuario',
        timestamps: false,
      }
    );
  
    return Usuario;
  };