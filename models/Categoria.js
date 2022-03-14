module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
      'Categoria',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        }
      },
      {
        tableName: 'categoria',
        timestamps: false,
      }
    );

    Categoria.associate = function(modelos){
        Categoria.hasMany(modelos.Service,{
          as: "service",
          foreignKey: "categoria_id"
        });
      }
  
    return Categoria;
  };