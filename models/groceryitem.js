'use strict';
module.exports = function(sequelize, DataTypes) {
  var GroceryItem = sequelize.define('GroceryItem', {
    name: DataTypes.STRING,
    calories : DataTypes.DOUBLE,
    fat: DataTypes.DOUBLE,
    protein :DataTypes.DOUBLE,
    carbohydrate: DataTypes.DOUBLE,
    acid: DataTypes.DOUBLE,
    polyols: DataTypes.DOUBLE,
    fibre: DataTypes.DOUBLE,
    ethanol: DataTypes.DOUBLE

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GroceryItem;
};