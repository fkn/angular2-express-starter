'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
            'GroceryItems',
            'measure',
            {
                type: Sequelize.STRING,
            }
        );
    }


};