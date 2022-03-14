module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define(
      'Pet',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
        },
        raca: {
            type: DataTypes.STRING,
        }
      },
      {
        tableName: 'pet',
        timestamps: false,
      }
    );

    Pet.associate = function(modelos){
        Pet.belongsToMany(modelos.Service,{
          as: "service",
          through: "services_pet",          
          foreignKey: "id_pet",
          otherKey: "id_services",
          timestamps: false
        });
      }
  
    return Pet;
  };