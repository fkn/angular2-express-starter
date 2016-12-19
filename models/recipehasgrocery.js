'use strict';
module.exports = function (sequelize, DataTypes) {

    var RecipeHasGrocery = sequelize.define('RecipeHasGrocery', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true
            },
            grocery_items: {
                type: DataTypes.INTEGER,
                // reference:'GroceryItem',
                // referencesKey:"id",
                allowNull: false

            },
            recipe_id: {
                type: DataTypes.INTEGER,
                // reference:'Recipe',
                // referencesKey:"id",
                allowNull: false

            }
        }
    );
    //RecipeHasGrocery.removeAttribute('id');
    RecipeHasGrocery.removeAttribute('createdAt');
    RecipeHasGrocery.removeAttribute('updatedAt');

    return RecipeHasGrocery;
};