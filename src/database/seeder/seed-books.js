'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('buku', [
      { title: 'Node.js Fundamentals', author: 'John Doe' },
      { title: 'Mastering Sequelize', author: 'Jane Smith' },
      { title: 'Express.js in Action', author: 'Robert Brown' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('buku', null, {});
  }
};

// Jalankan perintah:
// npx sequelize-cli db:seed:all