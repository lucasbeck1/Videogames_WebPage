const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (s) => {
  // defino el modelo
  s.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      alowNull: false,
      primaryKey: true 
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    released:{
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.FLOAT
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: null
    },
    image:{
      type: DataTypes.STRING
    },
    createdInDatabase:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{
    timestamps: false
  });
};
