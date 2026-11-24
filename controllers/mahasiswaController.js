const mahasiswaModel = require('../models/mahasiswaModel');

// GET /api/mahasiswa - Menampilkan semua data
const getAll = (req, res) => {
  const data = mahasiswaModel.getAllMahasiswa();
  res.status(200).json({
    success: true,
    message: "Berhasil mengambil seluruh data mahasiswa",
    total: data.length,
    data: data
  });
};

// GET /api/mahasiswa/:id - Menampilkan detail berdasarkan ID
const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.getMahasiswaById(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data mahasiswa dengan ID ${id} tidak ditemukan`
    });
  }

  res.status(200).json({
    success: true,
    message: "Detail data mahasiswa ditemukan",
    data: data
  });
};

// POST /api/mahasiswa - Menambahkan data baru
const create = (req, res) => {
  const { nim, nama, prodi, kelas } = req.body;

  if (!nim || !nama || !prodi || !kelas) {
    return res.status(400).json({
      success: false,
      message: "Semua field (nim, nama, prodi, kelas) wajib diisi!"
    });
  }

  const dataBaru = mahasiswaModel.createMahasiswa({ nim, nama, prodi, kelas });
  res.status(201).json({
    success: true,
    message: "Data mahasiswa berhasil ditambahkan",
    data: dataBaru
  });
};

// PUT /api/mahasiswa/:id - Mengubah data berdasarkan ID
const update = (req, res) => {
  const id = parseInt(req.params.id);
  const dataTerupdate = mahasiswaModel.updateMahasiswa(id, req.body);

  if (!dataTerupdate) {
    return res.status(404).json({
      success: false,
      message: `Gagal memperbarui. Data mahasiswa dengan ID ${id} tidak ditemukan`
    });
  }

  res.status(200).json({
    success: true,
    message: "Data mahasiswa berhasil diperbarui",
    data: dataTerupdate
  });
};

// DELETE /api/mahasiswa/:id - Menghapus data berdasarkan ID
const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const dataTerhapus = mahasiswaModel.deleteMahasiswa(id);

  if (!dataTerhapus) {
    return res.status(404).json({
      success: false,
      message: `Gagal menghapus. Data mahasiswa dengan ID ${id} tidak ditemukan`
    });
  }

  res.status(200).json({
    success: true,
    message: "Data mahasiswa berhasil dihapus",
    data: dataTerhapus
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};