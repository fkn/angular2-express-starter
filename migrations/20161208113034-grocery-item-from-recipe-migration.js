'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'Recipes',
        'grocery_items',
        {
          type: Sequelize.INTEGER,
          /*references: {
            model: 'RecipeHasGrocery',
            key: 'recipe_id'
          },*/
        }

    );
  }
};