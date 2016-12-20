'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GroceryItems', [
      { name: 'Milk',  calories: 1, fat: 2, protein: 3, carbohydrate: 4, acid: 5, polyols: 6, fibre: 7, ethanol: 8, measure:'volume',ImageId:'1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bread', calories: 10, fat: 11, protein: 12, carbohydrate: 13, acid: 14, polyols: 15, fibre: 16, ethanol: 17, measure:'mass',ImageId:'2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Water', calories: 20, fat: 21, protein: 22, carbohydrate: 23, acid: 24, polyols: 25, fibre: 26, ethanol: 27, measure:'volume',ImageId:'3', createdAt: new Date(), updatedAt: new Date() }
    ], {})
    .then(() => queryInterface.bulkInsert('Recipes', [
      { name: 'Pasta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Soup',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kebab', createdAt: new Date(), updatedAt: new Date() }
    ], {}))
    .then(() => queryInterface.bulkInsert('Measures', [
      { name: 'gramm', type:'mass', power: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'kg', type:'mass', power: 1000, createdAt:  new Date(), updatedAt: new Date() },
      { name: 'ml', type:'volume', power: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {}))
    .then(() => queryInterface.bulkInsert('Images', [
          { id:'1', createdAt: new Date(), updatedAt: new Date() },
          { id:'2',  createdAt: new Date(), updatedAt: new Date() },
          { id:'3', createdAt: new Date(), updatedAt: new Date() }
        ], {}))
    .catch(err=>console.log(err));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GroceryItem', null, {})
      .then(() => queryInterface.bulkDelete('Recipe', null, {}) );
  }
};
