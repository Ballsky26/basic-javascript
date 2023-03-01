// function tambah(a, b) {
//   return a + b;
// }
// var a = parseInt(prompt("Masukkan Nilai Satu : "));
// var b = parseInt(prompt("Masukkan Nilai Dua : "));
// var hasil = tambah(a, b);
// alert(hasil);

// function tambah(a, b) {
//   return a + b;
// }
// function kali(a, b) {
//   return a * b;
// }
// var hasil = kali(tambah(1, 2), tambah(3, 4));
// alert(hasil);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 4, 5);
alert(coba);
