var tanya = true;
while (tanya) {
  // Menangkap Pilihan Player
  var p = prompt(
    "Selamat Datang Di Game SUIT JAWA Silahkan Pilih : Gajah, Semut, Orang"
  );

  // Menangkap Pilihan Komputer
  // Membangkitkan Bilangan Random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }
  console.log(comp);

  var hasil = "";
  // Menentukan Rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "Gajah") {
    //   if (comp == "Orang") {
    //     hasil == "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "Orang" ? "MENANG!" : "KALAH!";
  } else if (p == "Orang") {
    //   if (comp == "Gajah") {
    //     hasil == "KALAH!";
    //   } else {
    //     hasil == "MENANG!";
    //   }
    hasil = comp == "Gajah" ? "KALAH!" : "MENANG";
  } else if (p == "Semut") {
    hasil = comp == "Orang" ? "KALAH!" : "MENANG";
  } else {
    hasil = "Memasukkan Pilihan Yang Salah!";
  }

  // Tampilkan Hasilnya
  alert(
    "Kamu Memilih : " +
      p +
      " dan Komputer memilih : " +
      comp +
      "\nMaka Hasilnya : Kamu " +
      hasil
  );

  tanya = confirm("Ingin Main Lagi?");
}

alert("Sampai Jumpa Lagi");

var lagi = true;
while (lagi) {
  alert("Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.");
  var comp = Math.round(Math.random() * 10);
  var hasil = "";
  for (var i = 3; i > 0; i--) {
    var p = prompt("Masukkan Angka tebakan!");
    j = i - 1;
    if (p == "") {
      alert("Yang anda masukkan bukan angka");
      i = 0;
    } else if (p == null) {
      i = 0;
    } else {
      if (p == comp) {
        alert("Anda BENAR!\nAngka yang dicari adalah " + comp);
        i = 0;
      } else if (p < comp) {
        if (j == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
        } else {
          alert("Terlalu RENDAH!\nAyo masih ada " + j + " kesempatan");
        }
      } else if (p > comp) {
        if (j == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
        } else {
          alert("Terlalu TINGGI!\nAyo masih ada " + j + " kesempatan");
        }
      } else {
        alert("Yang anda masukkan bukan angka");
        i = 0;
      }
    }
  }
  lagi = confirm("Main lagi?");
}
alert("Terima kasih.");
