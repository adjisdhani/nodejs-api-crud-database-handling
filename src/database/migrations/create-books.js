module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buku', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      author: Sequelize.STRING
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buku');
  }
};

// 3. Jalankan Migration
// Di terminal: npx sequelize-cli db:migrate