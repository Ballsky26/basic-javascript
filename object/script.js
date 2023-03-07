// Membuat Object
// Literal
var mahasiswa1 = {
  nama: "Syaiful Iqbal",
  nrp: "182400015",
  email: "Ballskyteam22@gmail.com",
  jurusan: "Teknik Informatika",
  umur: 23,
  ips: [3.0, 3.02, 3.69],
  alamat: {
    jalan: "Jl. Street Mobile",
    kota: "Midland",
    provinsi: "Java",
  },
};

var mahasiswa2 = {
  nama: "Achmad Fahdil",
  nrp: "182400077",
  email: "Achmadfahdil46@gmail.com",
  jurusan: "Teknik Informatika",
  umur: 24,
  ips: [3.0, 3.02, 3.69],
  alamat: {
    jalan: "Jl. Street Mobile",
    kota: "Midland",
    provinsi: "Java",
  },
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.nrp = nrp;
  mahasiswa.email = email;
  mahasiswa.jurusan = jurusan;
  return mahasiswa;
}

var mahasiswa3 = buatObjectMahasiswa(
  "Alun Meru Nuzula",
  "182400097",
  "Alunmeruzuula97@gmail.com",
  "Teknik Informatika"
);
var mahasiswa4 = buatObjectMahasiswa(
  "Agung Novanto",
  "182400023",
  "Agungnovanto23@gmail.com",
  "Teknik Informatika"
);
