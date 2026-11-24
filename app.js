const express = require('express');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
const PORT = 3000;

// Middleware untuk membaca request body berformat JSON
app.use(express.json());

// Endpoint utama untuk testing
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "REST API Sistem Informasi Data Mahasiswa berjalan dengan baik!"
  });
});

// Daftarkan routes mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});