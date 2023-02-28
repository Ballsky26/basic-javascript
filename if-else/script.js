// Pengkondisian If
var angka = 1;
if (angka == 1) {
  alert("Anda Memasukkan angka 1");
}

var angka = 4;
if (angka < 5) {
  alert(angka + " Lebih Kecil dari 5");
}

var angka = 3;
if (angka % 2 == 0) {
  alert(angka + " adalah bilangan GENAP");
}
if (angka % 2 == 1) {
  alert(angka + " adalah bilangan GANJIL");
}

// Pengkondisian If Else
var angka = prompt("Masukkan Angka :");
if (angka % 2 == 0) {
  alert(angka + " adalah bilangan GENAP");
} else {
  alert(angka + " adalah bilangan GANJIL");
}

// Latihan
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi. ");
  }
}
