// Global Scope / Window Scope

var a = 1;

function test() {
  var b = 2;
  console.log(b);
}
test();

var a = 1;

function test() {
  // Name Conflict / tidak bisa dipanggil kecuali menambahkan window.
  var a = 2;
  console.log(window.a);
}
test();

var a = 1;

function test() {
  // Name Conflict / jika tidak ada var nantinya akan di panggil duluan
  a = 2;
}
console.log(a);
test();

("use strict"); // Akan Membuat variable Lokal

function test() {
  a = 2;
}
test();
console.log(a);

var a = 1;
function test(a) {
  console.log(a);
}
test(2); //Otomatis yg di panggil adalah 2, karena jika dikasih arguments maka arguments bakal membuat variable lokal
console.log(a);

var a = 1;
function test(a) {
  console.log(a);
}
test(a); //Otomatis yg di panggil adalah 2, karena jika dikasih arguments maka arguments bakal membuat variable lokal
console.log(a);
