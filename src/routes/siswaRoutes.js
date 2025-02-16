const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');
const authorization = require('../middleware/authorization');

router.get('/siswa', authorization(['user1']), siswaController.getAllSiswa);
router.get('/siswa/:id', authorization(['user1']), siswaController.getSiswaById);
router.post('/siswa', authorization(['user1']), siswaController.createSiswa);
router.put('/siswa/:id', authorization(['user1']), siswaController.updateSiswa);
router.delete('/siswa/:id', authorization(['user1']), siswaController.deleteSiswa);

module.exports = router;
