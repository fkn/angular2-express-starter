'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
            'Recipes',
            'description',
            {
                type: Sequelize.STRING,
            }
        );
    }
};