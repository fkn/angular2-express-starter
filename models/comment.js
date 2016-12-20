'use strict';
module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    name: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          models.Recipe.hasMany(models.Comment, {
            as: 'comments'
          });
        }
      }
    });
  return Comment;
};