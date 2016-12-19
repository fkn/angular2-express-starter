'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('RecipeHasGroceries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            grocery_items: {
                type: Sequelize.INTEGER,
                allowNull: false,
               /* references: {
                    model: 'GroceryItems',
                    key: 'id'
                },*/
            },
            recipe_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Recipes',
                    key: 'id'
                }*/
            }
        });
    },

    down: function (queryInterface, Sequelize) {

    }
};
