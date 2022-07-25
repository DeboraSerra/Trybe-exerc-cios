'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J. K. Rowling',
        page_quantity: 250,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J. K. Rowling',
        page_quantity: 300,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J. K. Rowling',
        page_quantity: 350,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('books', null, {});
  }
};
