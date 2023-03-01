// Rekursif atau tidak pernah Berakhir sampai Error kecuali pakai rekursif yaitu Return
// function tampilAngka(n) {
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10);

function tampilAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return tampilAngka(n - 1);
}
tampilAngka(10);
