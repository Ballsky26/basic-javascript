// Infinite Loop / Tidak Pernah Berhenti
// while (true) {
//   console.log("Hello World");
// }

// Cara memberhentikan loop berdasarkan aksi User
var ulang = true;
while (ulang) {
  console.log("Hello World");
  ulang = confirm("Mau Input lagi?");
}

// Cara memberhentikan loop dari Program
var nilaiAwal = 1;
while (nilaiAwal <= 100) {
  console.log("Hello World");
  nilaiAwal++;
}

// var nilaiAwal = 1;
while (nilaiAwal <= 10) {
  console.log("Hello World Ke - " + nilaiAwal + "");
  nilaiAwal++;
}

// Latihan
var nilaiAngkot = 1;
while (nilaiAngkot <= 10) {
  console.log("Angkot No. " + nilaiAngkot + " Beroperasi dengan Baik.");
  nilaiAngkot++;
}
