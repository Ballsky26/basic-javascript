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
// var arr = ["Ari", "Iqbal", "Andi", "Miki", "Rasya"];
// for (var i = 0; i < arr.length; i++) {
//   console.log("Player ke-" + (i + 1) + " : " + arr[i]);
// }

// Method pada Array
// 1. Join
// var arr = ["Ari", "Iqbal", "Andi", "Miki", "Rasya"];
// console.log(arr.join(" - "));

// 2. Push & Pop (Menambahkan element Array Baru di Akhir, Menghapus element Array di Akhir)
// Push
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// arr.push("Tyrant");
// console.log(arr.join(" - "));

// Pop
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// arr.pop();
// console.log(arr.join(" - "));

// 3. Unshift & Shift (Menambahkan element Array Baru di Pertama, Menghapus element Array di Pertama)
// Unshift
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// arr.unshift("Tyrant");
// console.log(arr.join(" - "));

// Shift
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// arr.shift();
// console.log(arr.join(" - "));

// 4. Splice (Menyisipkan Array di tengah-tengah)
// Splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemen,Baru2, ...)
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// arr.splice(3, 0, "Tyrant", "Andix");
// arr.splice(1, 2, "Tyrant", "Fandi");
// console.log(arr.join(" - "));

//  5. Slice (Mengubah array menjadi Baru)
// Slice(awal, akhir (Dikurangi Satu dari nilai array));
// var arr = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(" - "));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Ari", "Iqbal", "Bagus", "Miki", "Rasya"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Player ke - " + i + " adalah : " + e);
// });

// 7. Map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. Sort (Mengurutkan)
// var angka = [1, 2, 10, 5, 4, 20, 3, 7, 9];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. Filter (Mencari nilai dan Mengembalikannya dalam bentuk array dalam banyak nilai)
// var angka = [1, 2, 10, 5, 4, 20, 3, 7, 9];
// var angka2 = angka.filter(function (x) {
//   return x == 5;
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// 10. Find (Mencari nilai dan Mengembalikannya dalam bentuk array dalam satu nilai)
// var angka = [1, 2, 10, 5, 4, 20, 3, 7, 9];
// var angka2 = angka.find(function (x) {
// return x == 5;
//   return x > 5;
// });
// console.log(angka2);

// Latihan

var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array & keluar function
    return penumpang;
  } else {
    // Telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi yang kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahan
        console.log(namaPenumpang + "Sudah ada di dalam angkot.");
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong!");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " Tidak ada didalam Angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
};
