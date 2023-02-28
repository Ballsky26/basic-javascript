// Pengulangan For
// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("Hello World Ke " + nilaiAwal);
// }

// Latihan
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi. ");
}
