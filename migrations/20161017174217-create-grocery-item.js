'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('GroceryItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            calories: {
                type: Sequelize.DOUBLE
            },
            fat: {
                type: Sequelize.DOUBLE
            },
            protein: {
                type: Sequelize.DOUBLE
            },
            carbohydrate: {
                type: Sequelize.DOUBLE
            },
            acid: {
                type: Sequelize.DOUBLE
            },
            polyols: {
                type: Sequelize.DOUBLE
            },
            fibre: {
                type: Sequelize.DOUBLE
            },
            ethanol: {
                type: Sequelize.DOUBLE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('GroceryItems');
    }
};