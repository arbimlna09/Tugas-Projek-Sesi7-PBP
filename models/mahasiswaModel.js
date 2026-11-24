let mahasiswa = [
  {
    id: 1,
    nim: "20250040003",
    nama: "Muhammad Arbi Maulana",
    prodi: "Teknik Informatika",
    kelas: "TI25F"
  },
  {
    id: 2,
    nim: "20250040012",
    nama: "Andi Saputra",
    prodi: "Teknik Informatika",
    kelas: "TI25F"
  },
  {
    id: 3,
    nim: "20250040025",
    nama: "Citra Lestari",
    prodi: "Sistem Informasi",
    kelas: "SI25A"
  }
];

// 1. Read: Ambil semua data
const getAllMahasiswa = () => {
  return mahasiswa;
};

// 2. Detail: Ambil data berdasarkan ID
const getMahasiswaById = (id) => {
  return mahasiswa.find((mhs) => mhs.id === id);
};

// 3. Create: Tambah data baru
const createMahasiswa = (dataBaru) => {
  const newId = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
  const mahasiswaBaru = {
    id: newId,
    nim: dataBaru.nim,
    nama: dataBaru.nama,
    prodi: dataBaru.prodi,
    kelas: dataBaru.kelas
  };
  mahasiswa.push(mahasiswaBaru);
  return mahasiswaBaru;
};

// 4. Update: Ubah data berdasarkan ID
const updateMahasiswa = (id, dataUpdate) => {
  const index = mahasiswa.findIndex((mhs) => mhs.id === id);
  if (index === -1) return null;

  mahasiswa[index] = {
    ...mahasiswa[index],
    nim: dataUpdate.nim || mahasiswa[index].nim,
    nama: dataUpdate.nama || mahasiswa[index].nama,
    prodi: dataUpdate.prodi || mahasiswa[index].prodi,
    kelas: dataUpdate.kelas || mahasiswa[index].kelas
  };
  return mahasiswa[index];
};

// 5. Delete: Hapus data berdasarkan ID
const deleteMahasiswa = (id) => {
  const index = mahasiswa.findIndex((mhs) => mhs.id === id);
  if (index === -1) return null;

  const deletedData = mahasiswa.splice(index, 1);
  return deletedData[0];
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
};