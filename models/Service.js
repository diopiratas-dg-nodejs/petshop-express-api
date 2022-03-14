module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define(
      'Service',
      {
        uuid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        text: {
          type: DataTypes.STRING(800),
        }, 
        email: {
            type: DataTypes.STRING,
        },
      },
      {
        tableName: 'services',
        timestamps: false,
      }
    );

    Service.associate = function(modelos){
      Service.belongsTo(modelos.Categoria,{
        as: "categoria",
        foreignKey: "categoria_id"
      }),
      Service.belongsToMany(modelos.Pet,{
        as: "pet",
        through: "services_pet",          
        foreignKey: "id_services",
        otherKey: "id_pet",
        timestamps: false
      });
    }
  
    return Service;
  };