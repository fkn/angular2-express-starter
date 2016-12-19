'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
            'GroceryItems',
            'ImageId',{
                type: Sequelize.INTEGER,
               /* references: {
                    model: 'Images',
                    key: 'id'
                },*/
            }
        );
    }
};