const express = require('express');
const { createBook, getBooks, getBookByID, updateBook, deleteBook } = require('../controllers/bookController');
const authorization = require('../middleware/authorization');
const router = express.Router();

router.post('/books', authorization(['user1']), createBook);
router.get('/books', authorization(['user1']), getBooks);
router.get('/books/:id', authorization(['user1']), getBookByID);
router.put('/books/:id', authorization(['user1']), updateBook);
router.delete('/books/:id', authorization(['user1']), deleteBook);

module.exports = router;