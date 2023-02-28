// Pengkondisian Else If
var angka = prompt("Masukkan Angka :");
if (angka % 2 == 0) {
  alert(angka + " adalah bilangan GENAP");
} else if (angka % 2 == 1) {
  alert(angka + " adalah bilangan GANJIL");
} else {
  alert("yang anda masukkan bukan angka");
}

// Latihan 1
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  } else if (noAngkot === 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroperasi. ");
  }
}

// Latihan 2
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  } else if (noAngkot === 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur ");
  } else if (noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroperasi. ");
  }
}

// Latihan 3
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroperasi. ");
  }
}

// Latihan 4
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik. ");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur ");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroperasi. ");
  }
}
