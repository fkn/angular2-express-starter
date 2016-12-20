'use strict';
module.exports = function (sequelize, DataTypes) {
    var GroceryItem = sequelize.define('GroceryItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        name: DataTypes.STRING,
        calories: DataTypes.DOUBLE,
        fat: DataTypes.DOUBLE,
        protein: DataTypes.DOUBLE,
        carbohydrate: DataTypes.DOUBLE,
        acid: DataTypes.DOUBLE,
        polyols: DataTypes.DOUBLE,
        fibre: DataTypes.DOUBLE,
        ethanol: DataTypes.DOUBLE,
        measure: DataTypes.STRING

    }, {
        classMethods: {
            associate: function (models) {
                GroceryItem.belongsTo(models.Image);
                GroceryItem.belongsToMany(models.Recipe, {
                    through: {
                        model: models.RecipeHasGrocery,
                        unique: false,
                    },
                    foreignKey: 'grocery_items',
                    constraints: false
                });


            }
        }
    });
    return GroceryItem;
};