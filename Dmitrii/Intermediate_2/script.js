// ///////////////////////////// //
// ///// Intermediate Ex 2 ///// //
// ///////////////////////////// //


let button = document.querySelector('#btn-randim');
let cont = document.getElementsByClassName('contain')[0];

let colors = ['#FA8171', '#D68810', '#15A688', '#CCCCFF', '#9EE2BE', '#FF7F50', '#ADA564', '#16ADB1', '#005E75'];

button.addEventListener('click', changeRandom);

function changeRandom() {
  let randomNum = Math.floor(Math.random() * colors.length);
  cont.style.backgroundColor = colors[randomNum];
}