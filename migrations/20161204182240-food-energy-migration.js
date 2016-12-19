'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
            'GroceryItems',
            'calories',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'fat',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'protein',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'carbohydrate',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'acid',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'polyols',
            {
                type: Sequelize.STRING,
            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'fibre',
            {
                type: Sequelize.STRING,

            }
        );
        queryInterface.addColumn(
            'GroceryItems',
            'ethanol',
            {
                type: Sequelize.STRING,
            }
        );

    }


};