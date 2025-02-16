const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get All Siswa
exports.getAllSiswa = async (req, res) => {
  try {
    const siswa = await prisma.siswa.findMany();
    res.status(200).json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Siswa by ID
exports.getSiswaById = async (req, res) => {
  try {
    const siswa = await prisma.siswa.findUnique({
      where: { id: parseInt(req.params.id) }
    });

    if (!siswa) return res.status(404).json({ message: "Siswa tidak ditemukan" });

    res.status(200).json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create Siswa
exports.createSiswa = async (req, res) => {
  try {
    const { nama, kelas, umur } = req.body;
    const siswa = await prisma.siswa.create({
      data: { nama, kelas, umur: parseInt(umur) }
    });

    res.status(201).json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Siswa
exports.updateSiswa = async (req, res) => {
  try {
    const { nama, kelas, umur } = req.body;
    const siswa = await prisma.siswa.update({
      where: { id: parseInt(req.params.id) },
      data: { nama, kelas, umur: parseInt(umur) }
    });

    res.status(200).json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Siswa
exports.deleteSiswa = async (req, res) => {
  try {
    await prisma.siswa.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.status(200).json({ message: "Siswa berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
