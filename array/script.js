// Key and value Pair - Mengakses elemen Pada Array
// var binatang = ["Kucing", "Kelinci", "Monyet", "Panda", "Koala", "Sapi"];
// console.log(binatang[4]);

// Bertipe Object
// console.log(typeof binatang);

// Memiliki method Length
// console.log(binatang.length);

// Array Multidimensi
// var myArray = ["teks", 2, false, myfunction, [4, 5, 6]];
// console.log(myArray[4][1]);

// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = "Syaiful";
// arr[1] = "Iqbal";
// arr[2] = "Ballsky";
// arr[6] = "Ari";

// console.log(arr);

// 2. Menghapus isi Array
// var arr = ["Ari", "Iqbal", "Andi"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
var arr = ["Ari", "Iqbal", "Andi", "Miki", "Rasya"];
for (var i = 0; i < arr.length; i++) {
  console.log("Player ke-" + (i + 1) + " : " + arr[i]);
}
