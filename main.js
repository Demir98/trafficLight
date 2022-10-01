// var krugovi = document.querySelectorAll(".krug");

// function startSemafor() {
//   krugovi[0].style.background = "red";
//   krugovi[1].style.background = "transparent";
//   krugovi[2].style.background = "transparent";

//   setTimeout(function () {
//     krugovi[0].style.background = "red";
//     krugovi[1].style.background = "yellow";
//   }, 2000);

//   setTimeout(function () {
//     krugovi[2].style.background = "green";
//     krugovi[1].style.background = "transparent";
//     krugovi[0].style.background = "transparent";
//   }, 4000);

//   setTimeout(function () {
//     krugovi[2].style.background = "green";
//     krugovi[1].style.background = "yellow";
//     krugovi[0].style.background = "transparent";
//   }, 6000);

//   setTimeout(startSemafor, 8000);
// }

// startSemafor();

//ODRADJENO .

var krugovi = document.querySelectorAll(".krug");

function radSemafora() {
  krugovi[0].style.background = "red";
  krugovi[1].style.background = "gray";
  krugovi[2].style.background = "gray";

  setTimeout(function () {
    krugovi[0].style.background = "red";
    krugovi[1].style.background = "yellow";
    krugovi[2].style.background = "gray";
  }, 2000);

  setTimeout(function () {
    krugovi[2].style.background = "green";
    krugovi[1].style.background = "gray";
    krugovi[0].style.background = "gray";
  }, 4000);

  setTimeout(function () {
    krugovi[2].style.background = "green";
    krugovi[1].style.background = "yellow";
    krugovi[0].style.background = "gray";
  }, 10000);

  setTimeout(radSemafora, 12000);
}

radSemafora();
