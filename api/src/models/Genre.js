const {DataTypes} = require('sequelize');

module.exports = s => {
  s.define('genre',{
  name:{
    type: DataTypes.STRING
  }
  },{timestamps: false});
};
