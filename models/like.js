'use strict';
module.exports = function (sequelize, DataTypes) {
  var Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER
  } ,{
      classMethods: {
        associate: function (models) {
          models.Recipe.hasMany(models.Like, {
            as: 'likes'
          });
        }
      }
    });
  return Like;
};