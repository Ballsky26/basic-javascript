// Pengkondisian Switch
var angka = prompt("Masukkan Angka : ");

switch (angka) {
  case "1":
    alert("Anda Memasukkan angka 1");
    break;
  case "2":
    alert("Anda Memasukkan angka 2");
    break;
  case "3":
    alert("Anda Memasukkan angka 3");
    break;
  default:
    alert("Angka yang anda memasukkan bukan angka");
    break;
}

var foodDrink = prompt(
  "Masukkan nama makanan dan minuman : \n (Contoh: Nasi, Daging, Susu, Kebab, Softdrink)"
);
switch (foodDrink) {
  case "Nasi":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "Daging":
    alert("Makanan / Minuman SEHAT");
    break;
  case "Susu":
    alert("Makanan / Minuman SEHAT");
    break;
  case "Burger":
    alert("Makanan / Minuman TIDAK SEHAT");
    break;
  case "Softdrink":
    alert("Makanan / Minuman TIDAK SEHAT");
    break;
  default:
    alert("Anda Memasukkan Nama Makanan/ Minuman yang Salah");
    break;
}
