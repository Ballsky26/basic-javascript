// Alert
alert("Halo");
alert("Nama");
alert("Saya");
alert("Ballsky");

// Prompt
var nama = prompt("Masukkan Nama Anda:");
alert(nama);

// Confirm
var tes = confirm("Apakah anda yakin?");
if (tes == true) {
  alert("Berhasil mendelete data");
} else {
  alert("Data anda tidak di delete");
}

// Coba Program
alert("Selamat Datang");
var lagi = true;

while (lagi) {
  var nama = prompt("Masukkan Nama Anda : ");
  alert("Halo " + nama);

  lagi = confirm("Mau Input lagi?");
}
alert("Terima Kasih");
