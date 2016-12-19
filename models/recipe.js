'use strict';
module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define('Recipe', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function (models) {
                Recipe.belongsToMany(models.GroceryItem, {
                    as: "GroceryItemParam",
                    through: {
                        model: models.RecipeHasGrocery,
                        unique: false,
                    },
                    foreignKey: 'recipe_id',
                    //constraints: false
                });
                // Recipe.belongsToMany(models.GroceryItem,{through: models.RecipeHasGrocery});
            }
        }
    });
    return Recipe;
};