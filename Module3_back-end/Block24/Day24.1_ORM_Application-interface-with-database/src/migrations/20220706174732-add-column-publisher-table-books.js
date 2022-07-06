'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('books', 'publisher', {
      type: Sequelize.STRING,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'publisher')
  }
};
