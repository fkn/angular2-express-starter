'use strict';
module.exports = function(sequelize, DataTypes) {
    var Image = sequelize.define('Image', {
        file : DataTypes.BLOB,
    }, {
        classMethods: {
            associate: function(models) {
                Image.hasOne(models.GroceryItem);
            }
        }
    });
    return Image;
};