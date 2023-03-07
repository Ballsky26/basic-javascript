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

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  // var this = {};
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this;
}

var mahasiswa5 = new Mahasiswa(
  "Mohammmad Farkhan",
  "192400025",
  "Mohammadfarkhan23@gmail.com",
  "Teknik Informatika"
);

// Latihan Object
function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // Penumpang Naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  // Penumpang Turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // Angkot Kosong
    if (this.penumpang.length === 0) {
      alert("Angkot masih Kosong!");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      // Jika Angkot ada penumpang
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Iqbal", ["Tirto", "Wiradesa"], [], 0);
var angkot2 = new Angkot("Fadil", ["Boom", "Kedungwuni"], [], 0);
