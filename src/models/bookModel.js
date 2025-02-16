const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('buku', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: DataTypes.STRING,
  author: DataTypes.STRING
}, {
  freezeTableName: true, // Mencegah Sequelize menambahkan 's' di akhir nama tabel
  timestamps: false // Hilangkan kolom createdAt dan updatedAt
});

module.exports = Book;