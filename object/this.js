// This
var a = 10;
console.log(this.a);

// Object Cara 1 - Function Declaration
function halo() {
  console.log(this);
  console.log("Hallo");
}
this.halo();
// this mengembalikan object Global

// Object Cara 2 - Object Literal
var obj = { a: 10, nama: "Syaiful Iqbal" };
obj.halo = function () {
  console.log(this);
  console.log("Hallo");
};
obj.halo();
// this mengembalikan object yang bersangkutan

// Object Cara 3 - Construction
function Halo() {
  console.log(this);
  console.log("Hallo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
